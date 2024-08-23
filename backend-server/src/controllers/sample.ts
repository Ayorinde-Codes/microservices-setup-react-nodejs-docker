import { Request, Response } from 'express'
import redisClient from '../utils/redisClient'
import { sendSuccess } from '../utils/errorCodes'
import SampleService from '../service/sampleService'

/**
 * Controller method to get details.
 * @param req Express Request object
 * @param res Express Response object
 * @returns Response with details
 */
export const details = async (req: Request, res: Response) => {

    return sendSuccess(res, 'first backend server sample details')
    // change to use api to get details from json file 
}