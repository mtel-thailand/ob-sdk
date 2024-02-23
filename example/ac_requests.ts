import * as OBBMSSDK from 'ob-bms-sdk';

OBBMSSDK.setBaseUrl('https://bms.glorymtel.xyz')

async function test(): Promise<void> {
  let response, data;

  // NOTE: This is a sample code to get all ac requests
  response = await OBBMSSDK.client.acRequestIndex()
  data = response.data.data

  console.dir({ data }, { depth: null })

  // NOTE: This is a sample code to get a ac request by id
  response = await OBBMSSDK.client.acRequestShow(data[0].id)
  data = response.data.data

  console.dir({ data }, { depth: null })


  // NOTE: This is a sample code to update a ac request
  response = await OBBMSSDK.client.acRequestUpdate(data.id, {status: 'approved'})
  data = response.data.data

  console.dir({ data }, { depth: null })

  // NOTE: This is a sample code to update a ac request
  response = await OBBMSSDK.client.acRequestUpdate(data.id, {status: 'rejected'})
  data = response.data.data

  console.dir({ data }, { depth: null })
}

test()
