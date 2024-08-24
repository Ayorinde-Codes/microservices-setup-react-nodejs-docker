import { Request, Response } from 'express'
import redisClient from '../utils/redisClient'
import { sendSuccess, sendNotFound, sendServerError } from '../utils/errorCodes'
import SampleService from '../service/sampleService'

/**
 * Controller method to get sample details.
 * @param req Express Request object
 * @param res Express Response object
 * @returns Response with details
 */
export const details = async (req: Request, res: Response) => {
  const redisKey = 'sample_data'
  const message = 'Data retrieved successfully'

  // Check if the key exists in Redis
  const keyExists = await redisClient.keyExists(redisKey)

  if (keyExists) {
    const redisData: string = (await redisClient.get(redisKey)) ?? ''

    return sendSuccess(res, message + ' from Redis', JSON.parse(redisData))
  }

  try {
    // Fetch data from SampleService
    const sampleData = await SampleService.getSampleData(req.query)

    if (sampleData) {
      // Store the data in Redis for 24 hours (86400 seconds)
      await redisClient.set(redisKey, JSON.stringify(sampleData), 86400)

      return sendSuccess(res, message, sampleData)
    } else {
      return sendNotFound(res, 'Data not found', {})
    }
  } catch (error) {
    console.error(error)
    return sendServerError(res, 'Unable to get data')
  }
}
