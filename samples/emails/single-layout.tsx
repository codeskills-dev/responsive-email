import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Link,
  Section,
  Row,
  Column,
} from "@react-email/components";
import React from "react";
import { ResponsiveColumn, ResponsiveRow } from "@responsive-email/react-email";

export const SingleLayoutTemplate = () => (
  <Html>
    <Head />
    <Preview>Responsive Single column Template</Preview>

    <Body style={main}>
      <Container style={container}>
        <Section style={colPadding}>
          <Heading
            as="h1"
            style={{ fontSize: 24, color: "#17BEBB", fontWeight: "bolder" }}
          >
            Shop
          </Heading>
        </Section>
        <Section style={colPadding}>
          <Heading
            as="h2"
            style={{
              fontSize: 34,
              fontWeight: 400,
              marginBottom: 14,
              letterSpacing: 1,
            }}
          >
            Ronald your shopping cart misses you
          </Heading>
        </Section>
        <Section style={colPadding}>
          <Text
            style={{
              fontSize: 24,
              marginBottom: 24,
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Amazing deals, updates, interesting news right in your inbox
          </Text>
        </Section>
        <Section>
          <Row
            style={{
              ...colPadding,
              borderBottom: "solid 1px rgba(0,0,0,.05)",
              paddingBottom: 20,
            }}
          >
            <Column style={{ width: "80%", fontSize: 16, fontWeight: "bold" }}>
              Item
            </Column>
            <Column
              style={{
                width: "20%",
                fontSize: 16,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Price
            </Column>
          </Row>
          <Row
            style={{
              ...colPadding,
              borderBottom: "solid 1px rgba(0,0,0,.05)",
              paddingTop: 20,
            }}
          >
            <Column style={{ width: "80%" }}>
              <div>
                <div
                  style={{
                    width: "100%",
                    paddingRight: 20,
                  }}
                >
                  <Heading as="h3" style={{ margin: 0 }}>
                    Analog wrist watch
                  </Heading>
                  <Text style={{ margin: 0, color: "rgba(0,0,0,.5)" }}>
                    Small
                  </Text>
                  <Text style={{ margin: "0 0 15px", color: "rgba(0,0,0,.5)" }}>
                    A small river namesd Duden flows by their place and supplies
                    it with the necessary regelialia
                  </Text>
                </div>
              </div>
            </Column>
            <Column style={{ fontSize: 16, textAlign: "center" }}>$120</Column>
          </Row>
          <Row
            style={{
              ...colPadding,
              borderBottom: "solid 1px rgba(0,0,0,.05)",
              paddingTop: 20,
            }}
          >
            <Column style={{ width: "80%" }}>
              <div>
                <div
                  style={{
                    width: "100%",
                    paddingRight: 20,
                  }}
                >
                  <Heading as="h3" style={{ margin: 0 }}>
                    Analog camera
                  </Heading>
                  <Text style={{ margin: 0, color: "rgba(0,0,0,.5)" }}>
                    Small
                  </Text>
                  <Text style={{ margin: "0 0 15px", color: "rgba(0,0,0,.5)" }}>
                    A small river namesd Duden flows by their place and supplies
                    it with the necessary regelialia
                  </Text>
                </div>
              </div>
            </Column>
            <Column style={{ fontSize: 16, textAlign: "center" }}>$120</Column>
          </Row>
        </Section>
        <Section style={{ ...colPadding, paddingTop: 15, paddingBottom: 15 }}>
          <Button
            style={{
              background: "#17BEBB",
              color: "white",
              borderRadius: 5,
              margin: "10px 0",
              padding: "10px 16px",
            }}
          >
            Continue your order
          </Button>
        </Section>
        <ResponsiveRow
          paddingTop={24}
          paddingBottom={24}
          paddingLeft={36}
          paddingRight={36}
          style={{
            background: "#f1f1f1",
            borderTop: "1px solid rgba(0,0,0,0.05)",
          }}
        >
          <ResponsiveColumn style={{ paddingRight: 5, paddingLeft: 5 }}>
            <Section style={{ textAlign: "left" }}>
              <Heading as="h3" style={{ fontSize: 20, marginBottom: 20 }}>
                About
              </Heading>
              <Text
                style={{
                  fontSize: 14,
                  margin: "15px 0",
                  color: "rgba(0,0,0,.5)",
                }}
              >
                A small river named Duded flows by their place and supplies it
                with the necessary regelialia
              </Text>
            </Section>
          </ResponsiveColumn>
          <ResponsiveColumn style={{ paddingRight: 5, paddingLeft: 5 }}>
            <Section style={{ textAlign: "left" }}>
              <Heading as="h3" style={{ fontSize: 20, marginBottom: 20 }}>
                Contact Info
              </Heading>
              <Text
                style={{
                  fontSize: 14,
                  marginBottom: 10,
                  color: "rgba(0,0,0,.5)",
                }}
              >
                203 Fake St. Mountain View, San Francisco, California, USA
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginBottom: 10,
                  color: "rgba(0,0,0,.5)",
                }}
              >
                +2 392 3929 210
              </Text>
            </Section>
          </ResponsiveColumn>
          <ResponsiveColumn style={{ paddingRight: 5, paddingLeft: 5 }}>
            <Section style={{ textAlign: "left" }}>
              <Heading as="h3" style={{ fontSize: 20, marginBottom: 20 }}>
                Useful Links
              </Heading>
              <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
                <li style={{ marginBottom: 10 }}>
                  <Link style={{ color: "black" }}>Home</Link>
                </li>
                <li style={{ marginBottom: 10 }}>
                  <Link style={{ color: "black" }}>Account</Link>
                </li>
                <li style={{ marginBottom: 10 }}>
                  <Link style={{ color: "black" }}>Wishlist</Link>
                </li>
                <li style={{ marginBottom: 10 }}>
                  <Link style={{ color: "black" }}>Order</Link>
                </li>
              </ul>
            </Section>
          </ResponsiveColumn>
        </ResponsiveRow>
        <Section style={{ ...colPadding, textAlign: "center" }}>
          <Text style={{ color: "rgba(0,0,0, 0.4)", margin: "15px 0" }}>
            No longer want to receive these emails? You can{" "}
            <Link href="#" style={{ color: "rgba(0,0,0,0.8)" }}>
              Unsubscribe here
            </Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default SingleLayoutTemplate;

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  background: "#ccc",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  paddingTop: 32,
};

const colPadding = { padding: "0px 36px" };
