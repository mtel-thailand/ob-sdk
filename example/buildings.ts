import * as OB_BMS_SDK from 'ob-bms-sdk'

OB_BMS_SDK.setBaseUrl('https://bms.glorymtel.xyz')

async function test(): Promise<void> {
  let response, data

  // NOTE: This is a sample code to get all buildings

  response = await OB_BMS_SDK.client.towersIndex()

  data = response.data.data

  console.log('==================== towersIndex ====================')
  console.dir({ data }, { depth: null })
}

test()
