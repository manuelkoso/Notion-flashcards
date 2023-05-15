import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });

(async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "Term",
        direction: "descending",
      },
    ],
  });
  console.log(response.results[0].properties.Term.title[0].plain_text);
})();