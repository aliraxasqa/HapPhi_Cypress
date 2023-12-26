import { loginPage } from "./pages/login_page.cy";
import { broadcastPage } from "./pages/broadcast_page.cy";

const login_Page = new loginPage()
const broadcast_page = new broadcastPage()

function getRandomFullName() {
    const firstNames = ["Alice's", "Bob's", "Charlie's", "David's", "Eve's", "Salmon's"];
    const lastNames = ["Lounge", "Room", "Fun Area", "Place", "Den", "Office"];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${randomFirstName} ${randomLastName}`;
}

function createBroadcastRecusively(count, totalTime) {
    if (count <= 0) {
        return
    }

    const startTime = new Date().getTime()
    const randomBroadcastName = getRandomFullName()

    broadcast_page.createBroadcastButton({force: true})
    broadcast_page.newBroadcastName(randomBroadcastName, {force: true})
    broadcast_page.addMembers()
    broadcast_page.submitNewBroadcast()

    const endTime = new Date().getTime()
    const processingTime = endTime - startTime
    totalTime += processingTime

    createBroadcastRecusively(count - 1, totalTime)
}

it ('should create Broadcast', () => {
    cy.visit('/')
    login_Page.enterUsername('dumbledor@mailinator.com')
    login_Page.enterPassword('Password@123')
    login_Page.clickLogin()
    cy.wait(12000)

    const broadcastCount = 20;
    const startTime = new Date().getTime();

    createBroadcastRecusively(broadcastCount, 0);

    const endTime = new Date().getTime();
    const totalTime = endTime - startTime;

    console.log(`Total Processing Time for ${broadcastCount} channels: ${totalTime}ms`);
})