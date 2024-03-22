import * as OBNOTISDK from 'ob-notification-sdk'

import {
  CampaignData,
  CampaignsCreateRequestBody,
  MessageCategoryResult,
  WrappedResponseMessageCategoriesIndexResponseData,
  WrappedResponseMessageCategoriesIndexResponseDataData,
  MessageCategoriesCreateRequestBody,
} from 'ob-notification-sdk/dist/api/api'

OBNOTISDK.setBaseUrl('https://notification.glorymtel.xyz')

async function test(): Promise<void> {
  let response, data

  // NOTE: This is a sample code to get all campaigns

  response = await OBNOTISDK.client.campaignsIndex()
  data = response.data.data

  console.dir({ data }, { depth: null })

  // NOTE: This is a sample code to create a campaign with minimal payload

  const createCampaignPayload: CampaignsCreateRequestBody = {
    message_category_id: 'f3c4a9c5-ef6a-41ef-89f8-f6d2e4e7ceb8',
  }

  response = await OBNOTISDK.client.campaignsCreate(createCampaignPayload)
  const campaign: CampaignData = response.data.data

  console.dir({ data }, { depth: null })

  // NOTE: This is a sample code to show campaign

  response = await OBNOTISDK.client.campaignsShow(campaign.id)
  data = response.data.data

  console.dir({ data }, { depth: null })

  // NOTE: This is a sample code to update campaign

  const updateCampaignPayload: CampaignsCreateRequestBody = {
    message_category_id: 'f3c4a9c5-ef6a-41ef-89f8-f6d2e4e7ceb8',
    push_notification_data: {
      title: {
        en: 'Hello',
      },
      message: {
        en: 'Hello World',
      },
    },
    message_template: {
      data: [
        {
          type: 'text',
          data: {
            // @ts-ignore
            en: 'Hello World',
          },
        },
      ],
    },
    tags: ['tag1', 'tag2'],
  }

  response = await OBNOTISDK.client.campaignsUpdate(campaign.id, updateCampaignPayload)
  data = response.data.data

  console.dir({ data }, { depth: null })

  // NOTE: This is a sample code to submit

  response = await OBNOTISDK.client.campaignsSubmit(data?.id ?? '')
  data = response.data.data

  console.dir({ data }, { depth: null })

  // NOTE: This is a sample code to reject

  response = await OBNOTISDK.client.campaignsReject(data?.id ?? '')
  data = response.data.data

  console.dir({ data }, { depth: null })

  // NOTE: This is a sample code to approve

  response = await OBNOTISDK.client.campaignsApprove(data?.id ?? '')
  data = response.data.data

  console.dir({ data }, { depth: null })

  // NOTE: This is sample code to get all message category
  response = await OBNOTISDK.client.messageCategoriesIndex()
  data = response.data.data

  console.log('==================== messageCategoriesIndex ====================')
  console.dir({ data }, { depth: null })

  // NOTE: This is sample code to get message category
  const messageCategory: any = data
  response = await OBNOTISDK.client.messageCategoriesShow(messageCategory[0].id)
  data = response.data.data

  console.log('==================== messageCategoriesShow ====================')
  console.dir({ data }, { depth: null })

  // NOTE: This is sample code to create message category
  const createMessageCategoryPayload: MessageCategoriesCreateRequestBody = {
    name: 'test',
    sequence: 1,
    visible: true,
  }
  response = await OBNOTISDK.client.messageCategoriesCreate(createMessageCategoryPayload)
  data = response.data.data

  console.log('==================== messageCategoriesCreate ====================')
  console.dir({ data }, { depth: null })

  // NOTE: This is sample code to update message category
  const updateMessageCategoryPayload: MessageCategoriesCreateRequestBody = {
    name: 'test 2',
    sequence: 1,
    visible: true,
  }
  response = await OBNOTISDK.client.messageCategoriesUpdate(data?.id ?? '', updateMessageCategoryPayload)
  data = response.data.data

  console.log('==================== messageCategoriesUpdate ====================')
  console.dir({ data }, { depth: null })

  // NOTE: This is sample code to delete message category
  response = await OBNOTISDK.client.messageCategoriesDelete(data?.id ?? '')
  data = response.data.data

  console.log('==================== messageCategoriesDelete ====================')
  console.dir({ data }, { depth: null })

  // NOTE: This is sample code to get all message template
  response = await OBNOTISDK.client.messageTemplatesIndex()
  data = response.data.data

  console.log('==================== messageTemplatesIndex ====================')
  console.dir({ data }, { depth: null })

  // NOTE: This is sample code to get message template
  const messageTemplate: any = data
  response = await OBNOTISDK.client.messageTemplatesShow(messageTemplate[0].id)
  data = response.data.data

  console.log('==================== messageTemplatesShow ====================')
  console.dir({ data }, { depth: null })

  // NOTE: This is sample code to create message template
  const createMessageTemplatePayload: any = {
    data: [
      {
        type: 'text',
        data: {
          en: 'Hello World',
        },
      },
    ],
  }
  response = await OBNOTISDK.client.messageTemplatesCreate(createMessageTemplatePayload)
  data = response.data.data

  console.log('==================== messageTemplatesCreate ====================')
  console.dir({ data }, { depth: null })

  // NOTE: This is sample code to update message template
  const updateMessageTemplatePayload: any = {
    data: [
      {
        type: 'text',
        data: {
          en: 'Hello World 2',
        },
      },
    ],
  }
  response = await OBNOTISDK.client.messageTemplatesUpdate(data?.id ?? '', updateMessageTemplatePayload)
  data = response.data.data

  console.log('==================== messageTemplatesUpdate ====================')
  console.dir({ data }, { depth: null })

  // NOTE: This is sample code to delete message template
  response = await OBNOTISDK.client.messageTemplatesDelete(data?.id ?? '')
  data = response.data.data

  console.log('==================== messageTemplatesDelete ====================')
  console.dir({ data }, { depth: null })
}

test()
