import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID

async function getDB() {
  try {
    const response = await notion.databases.retrieve({ database_id: databaseId }) 
    console.log(response)
    console.log("Success!")
  } catch (error) {
    console.error(error.body)
  }
}

getDB()

