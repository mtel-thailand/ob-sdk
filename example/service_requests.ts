import * as OBBMSSDK from 'ob-bms-sdk';

OBBMSSDK.setBaseUrl('https://bms.glorymtel.xyz')

async function test(): Promise<void> {
  let response, data;

  // NOTE: This is a sample code to get all service requests
  response = await OBBMSSDK.client.serviceRequestsIndex()
  data = response.data.data

  console.dir({ data }, { depth: null })

  // NOTE: This is a sample code to get a service request by id
  response = await OBBMSSDK.client.serviceRequestsShow(data[0].id)
  data = response.data.data

  console.dir({ data }, { depth: null })


  // NOTE: This is a sample code to update a service request
  response = await OBBMSSDK.client.serviceRequestsUpdate(data.id, {status: 'in_progress'})
  data = response.data.data

  console.dir({ data }, { depth: null })

  // NOTE: This is a sample code to update a service request
  response = await OBBMSSDK.client.serviceRequestsUpdate(data.id, {status: 'done'})
  data = response.data.data

  console.dir({ data }, { depth: null })
}

test()
