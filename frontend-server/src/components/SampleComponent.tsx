import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface SampleData {
  id: number
  title: string
  description: string
}

const SampleComponent: React.FC = () => {
  const [sampleData, setSampleData] = useState<SampleData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/sample/details')
        setSampleData(response.data.data)
      } catch (error) {
        console.error('Error fetching sample data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>Sample Data</h2>
      <ul>
        {sampleData.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SampleComponent
