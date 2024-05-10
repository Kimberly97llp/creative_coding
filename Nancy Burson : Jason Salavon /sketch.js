// {/* <script src="imagePaths.js"></script> */}


let images = []; // Array to store the images
let avgImage; // Variable to store the average image
// let imagePaths = ["pics/E594D99B-E0CA-4E71-AC2F-86B5D05ABB61_1_201_a.jpeg",
//                    "pics/E649C83D-D5D1-44A9-9FFF-3B716C247F1D_1_105_c.jpeg",
//                     "pics/46899EB7-2039-467B-8290-458805BCFA07_1_105_c.jpeg", 
//                     "pics/B7B1730B-AA34-4A6D-B065-86835E9EB789_1_105_c.jpeg",
//                      "pics/E6AC3CFF-FDC5-40A1-88D6-7FB7A9292089_1_105_c.jpeg", 
//                      "pics/EC70C77B-371A-4FE7-993D-7748228B45C2_1_201_a.jpeg",
//                       "pics/A94CF5E8-9962-44F2-B0EB-5883F655FA81_1_201_a.jpeg"];
//                   //     "pics/28F49E00-DAA4-4A6E-A8DE-60D409A0B3A5_1_201_a.jpeg",
//                   //    "pics/94C14C1D-1F1E-42AE-8204-A706D70DA1F1_1_201_a.jpeg",
//                   // "pics/01979D0E-9735-4716-9A15-7004124F3F00_1_201_a.jpeg",
//                   //   "pics/F21A9857-3338-4EAB-B71D-716146F6C613_1_105_c.jpeg",
//                     // "pics/C61FF7A4-FB6E-4A81-9828-201B269AF8B3_1_105_c.jpeg",
//                     //   "pics/21800CAF-2E4C-45E5-9645-C17D7613C575_1_105_c.jpeg",
//                   //  "pics/766F0025-ABC9-49AC-BF66-8473DCF52254_1_105_c.jpeg",
//                     // "pics/F55E81E4-DC4B-41A2-A972-0FC4AD163EE5_1_105_c.jpeg",
//                     // "pics/8218C634-40EE-4F58-A6A7-D9253F973B17_1_105_c.jpeg",
//                     //   "pics/0056337F-33B6-4147-ABB9-93E46B716F35_1_105_c.jpeg",
//                     // "pics/2C91DF88-B9E6-409B-A5AE-E1B10F2A5C90_1_105_c.jpeg", "pics/CD5470C6-7CD8-49DB-9712-E7B95A11A72E_1_105_c.jpeg", 
//                     // "pics/270721C2-F966-44EA-8812-23322ACFC6D7_1_105_c.jpeg", "pics/B651F050-5831-47E8-8342-915EE137EC76_1_105_c.jpeg",
//                     //   "pics/04032C74-029F-448A-A1BD-62CB1C0FCC5E_1_201_a.jpeg", "pics/0A045B87-9409-454C-A604-1E54B50E0084_1_105_c.jpeg",
//                     //   "pics/266405C2-9199-4940-9ED8-9DB872A0F960_1_105_c.jpeg", "pics/92BC3766-312D-469F-A51B-CD1A208E7287_1_201_a.jpeg",
//                     //     "pics/6D3BB837-169F-4E7A-BBF4-095DC27C32E6_1_105_c.jpeg", "pics/2746C691-AB24-4BDF-927A-9EB6D4322835_1_201_a.jpeg",
//                     //     "pics/8A11EC1E-0CC0-4EFF-B115-54617BE7154E_1_105_c.jpeg", "pics/D4AC1751-292C-4719-ACC4-C22EAEB6A610_1_201_a.jpeg",
//                     //       "pics/0542221B-52E3-4408-AE1A-1E8EAA1883E8_1_201_a.jpeg", "pics/F0CB05F2-4ABE-4142-9F6F-6ED9510389D5_1_105_c.jpeg",
//                     //       "pics/12957AAE-FF5E-4AD0-886C-C1CD1F5FAA51_1_105_c.jpeg", "pics/9716553D-19A5-40F1-A081-D80A1668A749_1_105_c.jpeg",
//                     //         "pics/E5901AF4-D3CD-44C7-A0CB-BE8FBD499D71_1_201_a.jpeg", "pics/984E327F-1D7C-4B03-B480-789B92D11E28_1_201_a.jpeg",
//                     //         "pics/F41B1482-F7B8-4013-B299-95BB600FF71E_1_201_a.jpeg", "pics/A1B90FE1-34E9-4AC5-864E-34146F568828_1_105_c.jpeg",
//                               // "pics/0D34104C-73F5-4802-8CBF-0C42073DA36A_1_105_c.jpeg", "pics/3B41F469-3B44-419A-802D-0B008DB25806_1_201_a.jpeg",
//                               // "pics/C348B77A-FD8D-49F6-97FD-56F2A521FF24_1_105_c.jpeg", "pics/22600C4F-C36B-4FFD-A09D-FFA5C1131FD9_1_201_a.jpeg",
//                               //   "pics/96D8E174-55B0-499C-983A-3A29AFBEEB33_1_105_c.jpeg", "pics/B4AF1255-1AD2-465D-B37B-AC8D3C666DD6_1_105_c.jpeg",
//                                 // "pics/7561F367-A193-47D4-9625-A2776DCD7FE4_1_201_a.jpeg", "pics/0723E430-10F1-41F9-A4E2-79D9DEAB0C4C_1_201_a.jpeg", 
//                                 // "pics/F5D5BE96-D477-46F7-B998-279CF1DE7E37_1_102_a.jpeg", "pics/CDD0648A-5805-42A7-9395-85270A087BBB_1_105_c.jpeg",
//                                 // "pics/08ACA1C0-45B1-493E-A019-AA07B0BAB276_1_105_c.jpeg", "pics/E5003B46-1134-4EC5-BDE6-EF96594389F0_1_201_a.jpeg",
//                                 // "pics/4980F9EF-30C0-4341-8268-F54550F1334E_1_105_c.jpeg", "pics/4CE85FB9-1AB8-4C76-AB2E-60E2F80F4AE8_1_105_c.jpeg",
//                                 // "pics/EEE39D03-54D8-4FB0-B3B3-60A343E4D961_1_105_c.jpeg", "pics/908D61D3-7A14-4CE8-9158-AAAF14EB2AFD_1_105_c.jpeg",
//                                 // "pics/9C9E8FC8-98E8-4113-92C0-D93EE407326F_1_105_c.jpeg"];
let imagePaths = [//"pics/0A045B87-9409-454C-A604-1E54B50E0084_1_105_c.jpeg", 
                  // "pics/0AEB5ADB-E7D5-4CF4-803A-93D09A9AAE0A_1_201_a.jpeg", 
                  // "pics/0D34104C-73F5-4802-8CBF-0C42073DA36A_1_105_c.jpeg",
                  // "pics/F9DBE43A-F2D0-4CCB-9B7E-115BE8C0C7FC_1_201_a.jpeg",
                  // "pics/F90436BD-8A38-4AD1-961E-7B3F4BB04951_1_105_c.jpeg", //news
                "pics/F21A9857-3338-4EAB-B71D-716146F6C613_1_105_c.jpeg",
              "pics/B8CF0CEB-ABA7-4BCC-B9BF-36358954F4E4_1_201_a.jpeg",
            "pics/C61FF7A4-FB6E-4A81-9828-201B269AF8B3_1_105_c.jpeg",
          "pics/F39B3168-623C-4B80-AA58-AB4548960A37_1_201_a.jpeg",
          "pics/0542221B-52E3-4408-AE1A-1E8EAA1883E8_1_201_a.jpeg", "pics/F0CB05F2-4ABE-4142-9F6F-6ED9510389D5_1_105_c.jpeg",
          "pics/12957AAE-FF5E-4AD0-886C-C1CD1F5FAA51_1_105_c.jpeg", "pics/9716553D-19A5-40F1-A081-D80A1668A749_1_105_c.jpeg",
            "pics/E5901AF4-D3CD-44C7-A0CB-BE8FBD499D71_1_201_a.jpeg", "pics/984E327F-1D7C-4B03-B480-789B92D11E28_1_201_a.jpeg",
            "pics/F41B1482-F7B8-4013-B299-95BB600FF71E_1_201_a.jpeg", "pics/A1B90FE1-34E9-4AC5-864E-34146F568828_1_105_c.jpeg",
           "pics/3B41F469-3B44-419A-802D-0B008DB25806_1_201_a.jpeg",
              "pics/C348B77A-FD8D-49F6-97FD-56F2A521FF24_1_105_c.jpeg", "pics/22600C4F-C36B-4FFD-A09D-FFA5C1131FD9_1_201_a.jpeg",
                "pics/96D8E174-55B0-499C-983A-3A29AFBEEB33_1_105_c.jpeg", "pics/B4AF1255-1AD2-465D-B37B-AC8D3C666DD6_1_105_c.jpeg",      
        ];

                 
function preload() {
  for (let i = 0; i < imagePaths.length; i++) {
    images[i] = loadImage(imagePaths[i]); // Load each image and store it in the array
  }
}

function setup() {
  createCanvas(640, 480);
  
  // Resize and crop images
  for (let i = 0; i < images.length; i++) {
    images[i].resize(width, height); // Resize images to match canvas size
    let cropX = (images[i].width - width) / 2;
    let cropY = (images[i].height - height) / 2;
    images[i] = images[i].get(cropX, cropY, width, height); // Crop images to match canvas size
  }
  
  // Calculate average image
  calculateAverageImage();
}

function calculateAverageImage() {
  avgImage = createImage(width, height); // Create image with canvas size
  avgImage.loadPixels();
  
  // Loop through each pixel
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let sumR = 0, sumG = 0, sumB = 0;
      
      // Sum up color values across all images
      for (let i = 0; i < images.length; i++) {
        let imgColor = images[i].get(x, y); // Get color of pixel at (x, y)
        sumR += red(imgColor);
        sumG += green(imgColor);
        sumB += blue(imgColor);
      }
      
      // Calculate average color
      let avgR = sumR / images.length;
      let avgG = sumG / images.length;
      let avgB = sumB / images.length;
      
      // Set color for the pixel in the average image
      let index = (x + y * width) * 4; // Get index in pixel array
      avgImage.pixels[index] = avgR;
      avgImage.pixels[index + 1] = avgG;
      avgImage.pixels[index + 2] = avgB;
      avgImage.pixels[index + 3] = 255; // Set alpha to 255 (fully opaque)
    }
  }
  
  avgImage.updatePixels(); // Update the pixels array of the image
}

function draw() {
  background(255);
  image(avgImage, 0, 0); // Display the average image on the canvas
}


