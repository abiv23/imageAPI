import { ImageController } from './ImageController';

const controller = new ImageController();

// import { ImageController } from './ImageController';

// optional custom config
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
controller.start();