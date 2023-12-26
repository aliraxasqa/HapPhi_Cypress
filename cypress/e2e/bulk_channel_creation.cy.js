import { loginPage } from "./pages/login_page.cy";
import { channelPage } from "./pages/channel_page.cy";

const login_Page = new loginPage()
const channel_Page = new channelPage()

function getRandomFullName() {
    const firstNames = ["Alice's", "Bob's", "Charlie's", "David's", "Eve's", "Salmon's"];
    const lastNames = ["Lounge", "Room", "Fun Area", "Place", "Den", "Office"];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${randomFirstName} ${randomLastName}`;
}

function createChannelsRecursively(count, totalTime) {
    if (count <= 0) {
        return;
    }

    const startTime = new Date().getTime();
    const randomFullName = getRandomFullName();

    channel_Page.createChannelButton({force: true})
    channel_Page.newChannelName(randomFullName)
    // channel_Page.newChannelDescription('This is description of Channel')
    channel_Page.submitNewChannel()

    const endTime = new Date().getTime();
    const processingTime = endTime - startTime;
    totalTime += processingTime;

    console.log(`Created channel ${count}, Processing Time: ${processingTime}ms`);

    createChannelsRecursively(count - 1, totalTime);
}

it ('should sign in', () => {
    cy.visit('/')
    login_Page.enterUsername('dumbledor@mailinator.com')
    login_Page.enterPassword('Password@123')
    login_Page.clickLogin()
    cy.wait(12000)

    const channelCount = 20;
    const startTime = new Date().getTime();

    createChannelsRecursively(channelCount, 0);

    const endTime = new Date().getTime();
    const totalTime = endTime - startTime;

    console.log(`Total Processing Time for ${channelCount} channels: ${totalTime}ms`);
})