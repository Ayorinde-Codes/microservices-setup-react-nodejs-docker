import sampleData from './sampleData.json'
import Service from './index'

class SampleService extends Service {
  constructor() {
    super('')
  }

  // Method to get sample data with optional query parameters
  async getSampleData(queryParams?: Record<string, unknown>) {
    // Return the entire JSON data
    return sampleData
  }
}

export default new SampleService()
