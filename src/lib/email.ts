import emailjs from '@emailjs/browser';

// These should be configured in your EmailJS dashboard
// Service: Gmail, ID: service_id
// Template: Proposal Success, ID: template_id
// Public Key: key

const SERVICE_ID = 'service_rec_commit'; // Placeholder
const TEMPLATE_ID = 'template_proposal_success'; // Placeholder
const PUBLIC_KEY = '0X3gIYEuFqoCz_W-p'; // Live Key

export const sendProposalNotification = async () => {
    try {
        console.log("Triggering email notification...");

        const templateParams = {
            message: "The Pull Request was successfully merged! She said YES.",
            subject: "REC & COMMIT: Proposal Accepted",
            boyfriend_email: "jbabawale1@gmail.com",
            girlfriend_email: "babawale78@yahoo.com",
            to_name: "Joshua & Recipient",
            from_name: "Success Engine"
        };

        if (PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            console.log("Email sent successfully!");
        } else {
            console.warn("EmailJS credentials not configured. Mocking send to:", templateParams.boyfriend_email, "and", templateParams.girlfriend_email);
        }
    } catch (error) {
        console.error("Failed to send email:", error);
    }
};
