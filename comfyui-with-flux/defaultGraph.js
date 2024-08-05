export const defaultGraph = {
  "last_node_id": 29,
  "last_link_id": 43,
  "nodes": [
    {
      "id": 17,
      "type": "BasicScheduler",
      "pos": [
        478.49737039819684,
        845.2171299774604
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 38,
          "slot_index": 0
        }
      ],
      "outputs": [
        {
          "name": "SIGMAS",
          "type": "SIGMAS",
          "links": [
            20
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "BasicScheduler"
      },
      "widgets_values": [
        "simple",
        20,
        1
      ]
    },
    {
      "id": 16,
      "type": "KSamplerSelect",
      "pos": [
        478,
        749
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "SAMPLER",
          "type": "SAMPLER",
          "links": [
            19
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "KSamplerSelect"
      },
      "widgets_values": [
        "euler"
      ]
    },
    {
      "id": 26,
      "type": "FluxGuidance",
      "pos": [
        480,
        144
      ],
      "size": {
        "0": 317.4000244140625,
        "1": 58
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 41
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            42
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "FluxGuidance"
      },
      "widgets_values": [
        3.5
      ],
      "color": "#233",
      "bgcolor": "#355"
    },
    {
      "id": 22,
      "type": "BasicGuider",
      "pos": [
        576,
        48
      ],
      "size": {
        "0": 222.3482666015625,
        "1": 46
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 39,
          "slot_index": 0
        },
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 42,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "GUIDER",
          "type": "GUIDER",
          "links": [
            30
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "BasicGuider"
      }
    },
    {
      "id": 10,
      "type": "VAELoader",
      "pos": [
        48,
        432
      ],
      "size": {
        "0": 311.81634521484375,
        "1": 60.429901123046875
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            12
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "ae.sft"
      ]
    },
    {
      "id": 13,
      "type": "SamplerCustomAdvanced",
      "pos": [
        864,
        192
      ],
      "size": {
        "0": 272.3617858886719,
        "1": 124.53733825683594
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "noise",
          "type": "NOISE",
          "link": 37,
          "slot_index": 0
        },
        {
          "name": "guider",
          "type": "GUIDER",
          "link": 30,
          "slot_index": 1
        },
        {
          "name": "sampler",
          "type": "SAMPLER",
          "link": 19,
          "slot_index": 2
        },
        {
          "name": "sigmas",
          "type": "SIGMAS",
          "link": 20,
          "slot_index": 3
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 43,
          "slot_index": 4
        }
      ],
      "outputs": [
        {
          "name": "output",
          "type": "LATENT",
          "links": [
            24
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "denoised_output",
          "type": "LATENT",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "SamplerCustomAdvanced"
      }
    },
    {
      "id": 25,
      "type": "RandomNoise",
      "pos": [
        480,
        624
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "NOISE",
          "type": "NOISE",
          "links": [
            37
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "RandomNoise"
      },
      "widgets_values": [
        384926607931898,
        "randomize"
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        866,
        367
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 24
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 12
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            9
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": [
        1155,
        196
      ],
      "size": {
        "0": 985.3012084960938,
        "1": 1060.3828125
      },
      "flags": {},
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 9
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 27,
      "type": "EmptySD3LatentImage",
      "pos": [
        477,
        472
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            43
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "EmptySD3LatentImage"
      },
      "widgets_values": [
        1024,
        1024,
        1
      ],
      "color": "#323",
      "bgcolor": "#535"
    },
    {
      "id": 28,
      "type": "Note",
      "pos": [
        48,
        576
      ],
      "size": {
        "0": 336,
        "1": 288
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "If you get an error in any of the nodes above make sure the files are in the correct directories.\n\nSee the top of the examples page for the links : https://comfyanonymous.github.io/ComfyUI_examples/flux/\n\nflux1-dev.sft goes in: ComfyUI/models/unet/\n\nt5xxl_fp16.safetensors and clip_l.safetensors go in: ComfyUI/models/clip/\n\nae.sft goes in: ComfyUI/models/vae/\n\n\nTip: You can set the weight_dtype above to one of the fp8 types if you have memory issues."
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 12,
      "type": "UNETLoader",
      "pos": [
        48,
        144
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            38,
            39
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "UNETLoader"
      },
      "widgets_values": [
        "flux1-dev.sft",
        "default"
      ],
      "color": "#223",
      "bgcolor": "#335"
    },
    {
      "id": 11,
      "type": "DualCLIPLoader",
      "pos": [
        49,
        275
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            10
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "DualCLIPLoader"
      },
      "widgets_values": [
        "t5xxl_fp8_e4m3fn.safetensors",
        "clip_l.safetensors",
        "flux"
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        395,
        253
      ],
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 10
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            41
          ],
          "slot_index": 0
        }
      ],
      "title": "CLIP Text Encode (Positive Prompt)",
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "Beautiful young woman, age 25, with long braided platinum blonde hair and bright magenta eyes, looking seductively and holding a large red-scaled dragon egg. The words \"Valyrian Tech\" are in a large sleek and stylistic font in the middle of the image."
      ],
      "color": "#232",
      "bgcolor": "#353"
    }
  ],
  "links": [
    [
      9,
      8,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      10,
      11,
      0,
      6,
      0,
      "CLIP"
    ],
    [
      12,
      10,
      0,
      8,
      1,
      "VAE"
    ],
    [
      19,
      16,
      0,
      13,
      2,
      "SAMPLER"
    ],
    [
      20,
      17,
      0,
      13,
      3,
      "SIGMAS"
    ],
    [
      24,
      13,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      30,
      22,
      0,
      13,
      1,
      "GUIDER"
    ],
    [
      37,
      25,
      0,
      13,
      0,
      "NOISE"
    ],
    [
      38,
      12,
      0,
      17,
      0,
      "MODEL"
    ],
    [
      39,
      12,
      0,
      22,
      0,
      "MODEL"
    ],
    [
      41,
      6,
      0,
      26,
      0,
      "CONDITIONING"
    ],
    [
      42,
      26,
      0,
      22,
      1,
      "CONDITIONING"
    ],
    [
      43,
      27,
      0,
      13,
      4,
      "LATENT"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.6209213230591555,
      "offset": [
        630.2062790609183,
        -156.81578238072996
      ]
    }
  },
  "version": 0.4
};