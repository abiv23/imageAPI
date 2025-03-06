import { ImageController } from './ImageController';

const controller = new ImageController();
controller.start();

// Optional: Stop after 10 seconds to see it end
// setTimeout(() => {
//     controller.stop();
//     console.log("Stopped");
// }, 10000);

// import { ImageController } from './ImageController';

// const customConfig = {
//     feedbackText: {
//         blurry: "Hold Still",
//         tooBright: "Too Bright!",
//         tooDark: "Too Dark!",
//         lowContrast: "Adjust Contrast",
//         ok: "Looks Good!"
//     },
//     feedbackDuration: 3000
// };

// const controller = new ImageController(customConfig);
// controller.start();