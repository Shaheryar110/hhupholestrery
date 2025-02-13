import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Box, ScrollView } from '@gluestack-ui/themed';
import { Image } from 'react-native';
import Header1 from '../../Components/Header1';
import RenderHTML from 'react-native-render-html';
const { width } = Dimensions.get('window');

const Privacy = () => {
    const content = `
    <p>This privacy notice for Larry Hughey's Interior Refurbishing LLC (doing business as Hughey Hartman Upholstery) (&quot;Hughey Hartman Upholstery,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), describes how and why we might collect, store, use, and/or share (&quot;process&quot;) your information when you use our services (&quot;Services&quot;), such as when you: Visit our website at http://www.upholsteryguy.com, or any website of ours that links to this privacy notice Engage with us in other related ways, including any sales, marketing, or events Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at hugheyhartman@gmail.com.</p>

<p> SUMMARY OF KEY POINTS</p>

<p>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.</p>

<p>What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Hughey Hartman Upholstery and the Services, the choices you make, and the products and features you use. Click here to learn more.</p>

<p>Do we process any sensitive personal information? We do not process sensitive personal information.</p>

<p>Do we receive any information from third parties? We do not receive any information from third parties.</p>

<p>How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click here to learn more.</p>

<p>In what situations and with which parties do we share personal information? We may share information in specific situations and with specific third parties. Click here to learn more.</p>

<p>How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click here to learn more.</p>

<p>What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click here to learn more.</p>

<p>How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>

<p>Want to learn more about what Hughey Hartman Upholstery does with any information we collect? Click here to review the notice in full.</p>

<p> TABLE OF CONTENTS</p>

<p>1. WHAT INFORMATION DO WE COLLECT? 2. HOW DO WE PROCESS YOUR INFORMATION? 3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION? 4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION? 5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES? 6. HOW LONG DO WE KEEP YOUR INFORMATION? 7. HOW DO WE KEEP YOUR INFORMATION SAFE? 8. DO WE COLLECT INFORMATION FROM MINORS? 9. WHAT ARE YOUR PRIVACY RIGHTS? 10. CONTROLS FOR DO-NOT-TRACK FEATURES 11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? 12. DO WE MAKE UPDATES TO THIS NOTICE? 13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? 14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</p>

<p> 1. WHAT INFORMATION DO WE COLLECT?</p>

<p>Personal information you disclose to us</p>

<p>In Short: We collect personal information that you provide to us.</p>

<p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>

<p>Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following: names phone numbers email addresses mailing addresses Sensitive Information. We do not process sensitive information.</p>

<p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

<p>Information automatically collected</p>

<p>In Short: Some information &mdash; such as your Internet Protocol (IP) address and/or browser and device characteristics &mdash; is collected automatically when you visit our Services.</p>

<p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>

<p>Like many businesses, we also collect information through cookies and similar technologies.</p>

<p>The information we collect includes: Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called &quot;crash dumps&quot;), and hardware settings). 2. HOW DO WE PROCESS YOUR INFORMATION?</p>

<p>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>

<p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>

<p> To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual&rsquo;s vital interest, such as to prevent harm.</p>

<p>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</p>

<p>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</p>

<p>If you are located in the EU or UK, this section applies to you.</p>

<p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information: Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Click here to learn more. Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved. Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</p>

<p>If you are located in Canada, this section applies to you.</p>

<p>We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time. Click here to learn more.</p>

<p>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example: If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way For investigations and fraud detection and prevention For business transactions provided certain conditions are met If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim For identifying injured, ill, or deceased persons and communicating with next of kin If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced If the collection is solely for journalistic, artistic, or literary purposes If the information is publicly available and is specified by the regulations</p>

<p>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</p>

<p>In Short: We may share information in specific situations described in this section and/or with the following third parties.</p>

<p>We may need to share your personal information in the following situations: Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company. When we use Google Maps Platform APIs. We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). To find out more about Google&rsquo;s Privacy Policy, please refer to this link.</p>

<p>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</p>

<p>In Short: We may use cookies and other tracking technologies to collect and store your information.</p>

<p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>

<p>6. HOW LONG DO WE KEEP YOUR INFORMATION?</p>

<p>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>

<p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>

<p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

<p>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</p>

<p>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</p>

<p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>

<p>8. DO WE COLLECT INFORMATION FROM MINORS?</p>

<p>In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>

<p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent&rsquo;s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at hugheyhartman@gmail.com.</p>

<p>9. WHAT ARE YOUR PRIVACY RIGHTS?</p>

<p>In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</p>

<p>In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below.</p>

<p>We will consider and act upon any request in accordance with applicable data protection laws.   If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</p>

<p>If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.</p>

<p>Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below.</p>

<p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>

<p>Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below. You will then be removed from the marketing lists. However, we may still communicate with you &mdash; for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>

<p>Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit http://www.aboutads.info/choices/.</p>

<p>If you have questions or comments about your privacy rights, you may email us at hugheyhartman@gmail.com.</p>

<p>10. CONTROLS FOR DO-NOT-TRACK FEATURES</p>

<p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>

<p>11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</p>

<p>In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>

<p>California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>

<p>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).</p>

<p>CCPA Privacy Notice</p>

<p>The California Code of Regulations defines a &quot;resident&quot; as:</p>

<p>(1) every individual who is in the State of California for other than a temporary or transitory purpose and (2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</p>

<p>All other individuals are defined as &quot;non-residents.&quot;</p>

<p>If this definition of &quot;resident&quot; applies to you, we must adhere to certain rights and obligations regarding your personal information.</p>

<p>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of: Receiving help through our customer support channels; Participation in customer surveys or contests; and Facilitation in the delivery of our Services and to respond to your inquiries. How do we use and share your personal information?</p>

<p>More information about our data collection and sharing practices can be found in this privacy notice.</p>

<p>You may contact us by visiting https://upholsteryguy.com/contact-us/, or by referring to the contact details at the bottom of this document.</p>

<p>If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</p>

<p>Will your information be shared with anyone else?</p>

<p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.</p>

<p>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be &quot;selling&quot; of your personal information.</p>

<p>Larry Hughey's Interior Refurbishing LLC has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Larry Hughey's Interior Refurbishing LLC will not sell personal information in the future belonging to website visitors, users, and other consumers.</p>

<p>Your rights with respect to your personal data</p>

<p>Right to request deletion of the data &mdash; Request to delete</p>

<p>You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</p>

<p>Right to be informed &mdash; Request to know</p>

<p>Depending on the circumstances, you have a right to know: whether we collect and use your personal information; the categories of personal information that we collect; the purposes for which the collected personal information is used; whether we sell your personal information to third parties; the categories of personal information that we sold or disclosed for a business purpose; the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and the business or commercial purpose for collecting or selling personal information. In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</p>

<p>Right to Non-Discrimination for the Exercise of a Consumer&rsquo;s Privacy Rights</p>

<p>We will not discriminate against you if you exercise your privacy rights.</p>

<p>Verification process</p>

<p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</p>

<p>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</p>

<p>Other privacy rights You may object to the processing of your personal information. You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information. You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA. You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission. To exercise these rights, you can contact us by visiting https://upholsteryguy.com/contact-us/, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</p>

<p>12. DO WE MAKE UPDATES TO THIS NOTICE?</p>

<p>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>

<p>We may update this privacy notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

<p>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</p>

<p>If you have questions or comments about this notice, you may email us at hugheyhartman@gmail.com or by post to:</p>

<p>Larry Hughey's Interior Refurbishing LLC 437 Gradle Dr. Suite A Carmel, IN 46032 United States</p>

<p>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</p>

<p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request form by clicking here.</p>

    `;

    const renderers = {
        ul: ({ children }: { children: React.ReactNode; }) => <ul style={styles.ul}>{children}</ul>,
        li: ({ children }: { children: React.ReactNode; }) => <li style={styles.li}>{children}</li>,
        a: ({ children, href }: { children: React.ReactNode; href: string }) => (
            <a href={href} style={styles.a}>
                {children}
            </a>
        ),
    };
    return (
        <ScrollView>
            <Header1 />
            <View style={styles.main} >
                <Image source={require("../../Components/images/hero.png")} style={{ width: "100%", height: 400, objectFit: "fill", position: "absolute", top: 0 }} />
                <Box sx={{ alignItems: "center", width: "100%", height: "100%", display: "flex", marginTop: 160 }} >
                    <Text style={{ color: "white", textAlign: "center", fontSize: 35, fontWeight: "600" }} >Privacy Policy</Text>
                    <Box sx={{ paddingTop: 200, paddingHorizontal: 20 }} >
                        <RenderHTML
                            contentWidth={width}
                            source={{ html: content }}

                        />
                        {/* <Text style={{ fontWeight: "bold", fontSize: 18, paddingBottom: 5 }} >
                            What categories of personal information do we collect?
                        </Text>
                        <Text  >
                            We have collected the following categories of personal information in the past twelve (12) months:
                        </Text> */}
                    </Box>
                </Box>

            </View>
        </ScrollView>
    )
}

export default Privacy

const styles = StyleSheet.create({
    main: {
        width: "100%",
        position: "relative",
        height: "100%",
        paddingBottom: 90,


    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    p: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5
    },
    ul: {
        marginTop: 10,
        marginBottom: 10
    },
    li: {
        fontSize: 16,
    },
    a: {
        color: 'blue',
    },
})