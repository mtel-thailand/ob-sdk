import * as OBNOTISDK from 'ob-notification-sdk';
import { CampaignData, CampaignsCreateRequestBody } from 'ob-notification-sdk/api/api';
import { MessageCategoryResult, WrappedResponseMessageCategoriesIndexResponseData, WrappedResponseMessageCategoriesIndexResponseDataData } from 'ob-notification-sdk/dist/api';

OBNOTISDK.setBaseUrl('https://notification.glorymtel.xyz')

async function test(): Promise<void> {
  let response, data
  
  // NOTE: This is a sample code to get all campaigns

  response = await OBNOTISDK.client.campaignsIndex();
  data = response.data.data;

  console.dir({ data }, { depth: null });

  // NOTE: This is a sample code to create a campaign with minimal payload

  const createCampaignPayload: CampaignsCreateRequestBody = {
    message_category_id: "f3c4a9c5-ef6a-41ef-89f8-f6d2e4e7ceb8",
  }

  response = await OBNOTISDK.client.campaignsCreate(createCampaignPayload);
  const campaign: CampaignData = response.data.data;

  console.dir({ data }, { depth: null });

  // NOTE: This is a sample code to show campaign

  response = await OBNOTISDK.client.campaignsShow(campaign.id)
  data = response.data.data

  console.dir({ data }, { depth: null })  

  // NOTE: This is a sample code to update campaign

  const updateCampaignPayload: CampaignsCreateRequestBody = {
    message_category_id: "f3c4a9c5-ef6a-41ef-89f8-f6d2e4e7ceb8",
    push_notification_data: {
      title: {
        'en': 'Hello'
      },
      message: {
        'en': 'Hello World'
      },
    },
    message_template: {
      data: [
        {
          type: 'text',
          data: {
            en: 'Hello World'
          }
        }
      ]
    },
    tags: ['tag1', 'tag2']
  }

  response = await OBNOTISDK.client.campaignsUpdate(campaign.id, updateCampaignPayload)
  data = response.data.data

  console.dir({ data }, { depth: null })

  // NOTE: This is a sample code to submit

  response = await OBNOTISDK.client.campaignsSubmit(data.id)
  data = response.data.data

  console.dir({ data }, { depth: null })

  // NOTE: This is a sample code to approve

  response = await OBNOTISDK.client.campaignsApprove(data.id)
  data = response.data.data

  console.dir({ data }, { depth: null })  
}

test()
