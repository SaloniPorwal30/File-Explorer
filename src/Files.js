export const Files = {
  type: "folder",
  name: "parent",
  data: [
    {
      type: "folder",
      name: "root",
      data: [
        {
          type: "folder",
          name: "src",
          data: [
            {
              type: "file",
              name: "index.js",
            },
          ],
        },
        {
          type: "folder",
          name: "public",
          data: [
            {
              type: "file",
              name: "index.html",
            },
            {
              type: "folder",
              name: "images",
              data: [
                {
                  type: "file",
                  name: "abc.jpg",
                },
                {
                  type: "file",
                  name: "xyz.png",
                },
              ],
            },
            {
              type: "file",
              name: "logo.svg",
            },
          ],
        },
        {
          type: "file",
          name: "style.css",
        },
      ],
    },
  ],
};
