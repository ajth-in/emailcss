import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { defineConfig } from "../src/config";

const { css } = defineConfig({
  validationMode: "warn",
  supportThreshold: { threshold: 50, includePartialSupport: true },
});

interface AWSVerifyEmailProps {
  verificationCode?: string;
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export default function AWSVerifyEmail({ verificationCode }: AWSVerifyEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>AWS Email Verification</Preview>
      <Body style={css({ backgroundColor: "white", color: "#212121" })}>
        <Container style={css({ padding: "5", marginX: "auto", backgroundColor: "#eee" })}>
          <Section style={css({ backgroundColor: "white" })}>
            <Section
              style={css({
                backgroundColor: "#252f3d",
                display: "flex",
                paddingY: "5",
                alignItems: "center",
                justifyContent: "center",
              })}
            >
              <Img src={`${baseUrl}/static/aws-logo.png`} width="75" height="45" alt="AWS's Logo" />
            </Section>
            <Section style={css({ paddingY: "25px", paddingX: "35px" })}>
              <Heading
                style={css({
                  color: "#333",
                  fontSize: "xl",
                  fontWeight: "bold",
                  marginBottom: "15px",
                })}
              >
                Verify your email address
              </Heading>
              <Text
                style={css({
                  color: "#333",
                  fontSize: "sm",
                  lineHeight: "relaxed",
                  marginTop: "6",
                  marginBottom: "14px",
                  marginX: "0",
                })}
              >
                Thanks for starting the new AWS account creation process. We want to make sure it's
                really you. Please enter the following verification code when prompted. If you
                don&apos;t want to create an account, you can ignore this message.
              </Text>
              <Section
                style={css({ display: "flex", alignItems: "center", justifyContent: "center" })}
              >
                <Text
                  style={css({
                    color: "#333",
                    margin: "0",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "sm",
                  })}
                >
                  Verification code
                </Text>

                <Text
                  style={css({
                    color: "#333",
                    fontSize: "4xl",
                    marginY: "10px",
                    marginX: "0",
                    fontWeight: "bold",
                    textAlign: "center",
                  })}
                >
                  {verificationCode}
                </Text>
                <Text
                  style={css({ color: "#333", fontSize: "sm", margin: "0", textAlign: "center" })}
                >
                  (This code is valid for 10 minutes)
                </Text>
              </Section>
            </Section>
            <Hr />
            <Section style={css({ paddingY: "25px", paddingX: "35px" })}>
              <Text style={css({ color: "#333", fontSize: "sm", margin: "0" })}>
                Amazon Web Services will never email you and ask you to disclose or verify your
                password, credit card, or banking account number.
              </Text>
            </Section>
          </Section>
          <Text
            style={css({
              color: "#333",
              fontSize: "xs",
              marginY: "24px",
              marginX: "0",
              paddingX: "5",
              paddingY: "0",
            })}
          >
            This message was produced and distributed by Amazon Web Services, Inc., 410 Terry Ave.
            North, Seattle, WA 98109. © 2022, Amazon Web Services, Inc.. All rights reserved. AWS is
            a registered trademark of{" "}
            <Link
              href="https://amazon.com"
              target="_blank"
              style={css({ color: "#2754C5", textDecoration: "underline", fontSize: "sm" })}
            >
              Amazon.com
            </Link>
            , Inc. View our{" "}
            <Link
              href="https://amazon.com"
              target="_blank"
              style={css({ color: "#2754C5", textDecoration: "underline", fontSize: "sm" })}
            >
              privacy policy
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

AWSVerifyEmail.PreviewProps = {
  verificationCode: "596853",
} satisfies AWSVerifyEmailProps;
