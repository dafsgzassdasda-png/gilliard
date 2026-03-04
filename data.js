var APP_DATA = {
  "scenes": [
    {
      "id": "0-quartojpg",
      "name": "quarto.jpg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.29172469880827023,
          "pitch": 0.5003628854115654,
          "rotation": 0.7853981633974483,
          "target": "1-tvjpg"
        },
        {
          "yaw": 0.007165806425593502,
          "pitch": 0.6081078698397171,
          "rotation": 0,
          "target": "2-cozinha-mesa-centraljpg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-tvjpg",
      "name": "tv.jpg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.016981014640933267,
          "pitch": 0.42979553247739943,
          "rotation": 0,
          "target": "0-quartojpg"
        },
        {
          "yaw": 1.693272546150589,
          "pitch": 0.40964055905480734,
          "rotation": 5.497787143782138,
          "target": "2-cozinha-mesa-centraljpg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cozinha-mesa-centraljpg",
      "name": "cozinha mesa central.jpg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.688359608945433,
          "pitch": 0.5638285001337913,
          "rotation": 5.497787143782138,
          "target": "1-tvjpg"
        },
        {
          "yaw": -1.0184908255824645,
          "pitch": 0.44232626867312064,
          "rotation": 0.7853981633974483,
          "target": "0-quartojpg"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "projeto-TESTE",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
