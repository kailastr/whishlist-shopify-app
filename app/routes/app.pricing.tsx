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
    Button,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function PricingPage() {
    return (
        <Page>
            <TitleBar title="Pricing" />
            <Layout.Section>
                <InlineGrid gap="400" columns={3}>
                    <Card>
                        <div>
                            <Text as="h1" variant="headingMd">
                                Basic
                            </Text>
                        </div>
                        <div >
                            <List>
                                <List.Item>Unlimited products</List.Item>
                                <List.Item>Unlimited customers</List.Item>
                                <List.Item>Unlimited orders</List.Item>
                            </List>
                        </div>
                        <Button variant="primary" onClick={() => { }}>Get started</Button>
                    </Card>
                    <Card>
                        <div>
                            <Text as="h1" variant="headingMd">
                                Pro
                            </Text>
                        </div>
                        <div>
                            <List>
                                <List.Item>Unlimited products</List.Item>
                                <List.Item>Unlimited customers</List.Item>
                                <List.Item>Unlimited orders</List.Item>
                            </List>
                            <Button variant="primary" onClick={() => { }}>Get started</Button>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <Text as="h1" variant="headingMd">
                                Premium
                            </Text>
                        </div>
                        <div>
                            <List>
                                <List.Item>Unlimited products</List.Item>
                                <List.Item>Unlimited customers</List.Item>
                                <List.Item>Unlimited orders</List.Item>
                            </List>
                            <Button variant="primary" onClick={() => { }}>Get started</Button>
                        </div>
                    </Card>
                </InlineGrid>
            </Layout.Section>
        </Page>
    );
}