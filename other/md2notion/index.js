import { Client } from '@notionhq/client'

const notion = new Client({ auth: 'secret_vKCMGRAMjyqgrJNOiwtVtKfn4sTjv7GihwGSoEFJiyy' })

const databaseId = '642c4c96612f4f4792d3b49756afc8d2'

async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: text,
              },
            },
          ],
        },
      },
    })
    console.log(response)
    console.log('Success! Entry added.')
  } catch (error) {
    console.error(error.body)
  }
}

addItem('Yurts in Big Sur, California')
