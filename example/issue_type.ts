import * as OBBMSSDK from 'ob-bms-sdk';

OBBMSSDK.setBaseUrl('https://bms.glorymtel.xyz')

async function test(): Promise<void> {
    let response, data;

    // NOTE: This is a sample code to get all issue type
    response = await OBBMSSDK.client.issueTypesIndex()
    data = response.data.data
  
    console.dir({ data }, { depth: null })
  
  
    // NOTE: This is a sample code to delete issue type
    response = await OBBMSSDK.client.issueTypesUpdate(data[0].id,{deleted_at: new Date().toISOString()})
    data = response.data.data
  
    console.dir({ data }, { depth: null })
}