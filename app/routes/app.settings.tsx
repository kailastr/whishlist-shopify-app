import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
  InlineGrid,
  TextField,
  Divider,
  useBreakpoints,
  Button,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useState } from "react";
import { ActionFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";

//import db
import db from "../db.server";

export async function loader() {
  // Data from database
  let Settings = await db.setting.findFirst();

  console.log('Settings:', Settings);

  return json({ Settings });
}

type SettingsType = {
  name: string;
  description: string;
};

export async function action({ request }: ActionFunctionArgs) {
  let formData = await request.formData();

  const name = formData.get("name");
  const description = formData.get("description");

  // Validate types to ensure they are strings
  if (typeof name !== "string" || typeof description !== "string") {
    return json({ error: "Invalid form submission" }, { status: 400 });
  }

  // Example: Here you would typically update your database with the new settings
  console.log("Received settings:", { name, description });

  await db.setting.upsert({
    where: { id: '1' },
    create: { id: '1', name, description },
    update: { name, description },
  });

  // Return a JSON response with the updated settings data
  return json({ settings: { name, description } });
}

export default function SettingsPage() {

  const { Settings } = useLoaderData<{ Settings: SettingsType }>();

  const [formState, setFormState] = useState(Settings);

  return (
    <Page>
      <TitleBar title="Settings" />
      <BlockStack gap={{ xs: "800", sm: "400" }}>
        <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
          <Box
            as="section"
          // paddingInlineStart={{ xs: "extraLoose", sm: "loose" }}
          // paddingInlineEnd={{ xs: "extraLoose", sm: "loose" }}
          >
            <BlockStack gap="400">
              <Text as="h3" variant="headingMd">
                Settings
              </Text>
              <Text as="p" variant="bodyMd">
                Update app setiings and preferences
              </Text>
            </BlockStack>
          </Box>
          <Card roundedAbove="sm">
            <Form method="post">
              <BlockStack gap="400">
                <TextField label="App Name" name="name" autoComplete="off" value={(formState as { name: string })?.name} onChange={(value) => setFormState({ ...formState, name: value })} />
                <TextField label="Description" name="description" autoComplete="off" value={(formState as { description: string })?.description} onChange={(value) => setFormState({ ...formState, description: value })} />
                <Button submit={true} variant="primary" >Save</Button>
              </BlockStack>
            </Form>
          </Card>
        </InlineGrid>
      </BlockStack>
    </Page>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="100"
      paddingInlineEnd="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
