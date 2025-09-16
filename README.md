# Creative Coding Portfolio

This is a HTML page that displays the artworks you created during your Creative Coding course at [Jönköping University](https://www.ju.se).

## How to add a new project

To add a new project, you need to copy or add the JavaScript file into your experiments folder. Next, you open the `data.json` file in your favorite editor (for example Visual Studio Code) and add a new entry to the array. You can just copy the structure:

```json
// {
//   "file": "experiments/example.js",
//   "name": "Name of your experiment",
//   "description": "Explains the what and the why. What is the main idea? What is the purpose? What is the inspiration?"
// }

 {
      "file": "experiments/squa_moln.js",
      "name": "Vera Molnar Squares",
      "description": "A recreasion of Vera Molnár's square art with the guidance of Garrit Schaap's code example. Each cell has layered rectangles with random positions and randomized bright, semi-transparent colors on a black background. I was aiming for a vibrant and glowing effect"
    },
{
  "file": "experiments/tri_moln.js",
      "name": "Vera Molnar Traingles",
      "description": "Triangle art grid inspired by Vera Molnár's square art, with the guidance of Garrit Schaap's code example. Each cell is made of layered triangles with randomized positions and randomized pastel colors on a black background. I was aiming for a gentle and dreamy effect"

},
{"file": "experiments/noisePerline.js",
      "name": "Perline's noise ",
      "description": "A landscape art by using perline's noise with the guidance of Garrit Schaap's noise example. You can see a layered mountain with a fading effect and a blue sky background, I was goign for a dreamy feeling."
},
{
      "file": "experiments/noisePerline.js",
      "name": "Perline's noise 2 ",
      "description": "A landscape art by using perline's noise with the guidance of Garrit Schaap's noise example. To make this piece more intresting I played around with height of the noise and removed the no loop effect, and used a random fill colors for the gradient and kept the background white."
    }
```

In file, you write the path to the JavaScript file that contains your work. For name, you enter the name of your work. Under description you should explain your concept, the purpose of your work, and the inspiration. Don't forget to add the comma between the entries.

If you saved the JSON-file, commited everything and pushed it to GitHub, your changes should be visible online soon :)
