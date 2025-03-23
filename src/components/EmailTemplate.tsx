import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Section,
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  nickname?: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ email, nickname }) => {
  const greeting = nickname ? `Hi ${nickname}!` : 'Hi there!';
  
  return (
    <Html>
      <Preview>Welcome to AIGC Plan - Your Journey to AI-Powered Content Creation Begins!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Text style={logo}>AIGC Plan</Text>
          </Section>
          
          <Section style={contentSection}>
            <Text style={heading}>{greeting}</Text>
            
            <Text style={paragraph}>
              Welcome to AIGC Plan! We're thrilled to have you join our exclusive waitlist. 
              You're now part of a community that's shaping the future of AI-powered content creation.
            </Text>

            <Text style={paragraph}>
              <strong>Your Waitlist Status:</strong><br />
              You're currently on our waitlist. We'll keep you updated on our progress and notify you as soon as we launch.
            </Text>

            <Text style={paragraph}>
              <strong>What's Next?</strong><br />
              We're working hard to bring you an innovative platform that will revolutionize how you create content.
              Stay tuned for updates on our development progress and early access opportunities.
            </Text>

            <Text style={paragraph}>
              <strong>Get Involved:</strong><br />
              We'd love to hear your thoughts and ideas! Feel free to reply to this email with:
              <ul style={list}>
                <li>Your content creation needs</li>
                <li>Features you'd like to see</li>
                <li>Any questions you have</li>
              </ul>
            </Text>

            <Text style={paragraph}>
              Best regards,<br />
              <span style={signature}>The AIGC Plan Team</span>
            </Text>
          </Section>

          <Section style={footerSection}>
            <Text style={footer}>
              © 2024 AIGC Plan. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
};

const logoSection = {
  padding: '20px 0',
  textAlign: 'center' as const,
};

const logo = {
  fontSize: '32px',
  fontWeight: '700',
  color: '#1a1a1a',
  textDecoration: 'none',
};

const contentSection = {
  padding: '20px 0',
  borderTop: '1px solid #eaeaea',
  borderBottom: '1px solid #eaeaea',
};

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#1a1a1a',
  marginBottom: '24px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#484848',
  margin: '16px 0',
};

const list = {
  margin: '8px 0',
  paddingLeft: '24px',
};

const signature = {
  color: '#666666',
  fontSize: '14px',
};

const footerSection = {
  padding: '20px 0',
  textAlign: 'center' as const,
};

const footer = {
  fontSize: '12px',
  color: '#666666',
  margin: '0',
}; 