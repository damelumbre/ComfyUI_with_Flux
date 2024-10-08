FROM valyriantech/comfyui-without-flux:latest

# Due to the fact that the models are in a gated repository, we need to download them separately BEFORE building this image and store them locally in a folder called flux
# https://huggingface.co/black-forest-labs/FLUX.1-schnell/resolve/main/ae.safetensors
COPY ae.safetensors /ComfyUI/models/vae/
# https://https://huggingface.co/black-forest-labs/FLUX.1-dev/resolve/main/flux1-dev.safetensors
COPY flux/flux1-dev.safetensors /ComfyUI/models/unet/

# Download and move clip_l.safetensors
RUN wget -O /ComfyUI/models/clip/clip_l.safetensors "https://huggingface.co/comfyanonymous/flux_text_encoders/resolve/main/clip_l.safetensors?download=true"

# Download and move t5xxl_fp16.safetensors
RUN wget -O /ComfyUI/models/clip/t5xxl_fp8_e4m3fn.safetensors "https://huggingface.co/comfyanonymous/flux_text_encoders/resolve/main/t5xxl_fp16.safetensors?download=true"

# Download LoRas
RUN wget -O /ComfyUI/models/loras/GracePenelopeTargaryenV3.safetensors "https://huggingface.co/WouterGlorieux/GracePenelopeTargaryenV3/resolve/main/GracePenelopeTargaryenV3.safetensors?download=true"
RUN wget -O /ComfyUI/models/loras/VideoAditor_flux_realism_lora.safetensors "https://huggingface.co/VideoAditor/Flux-Lora-Realism/resolve/main/flux_realism_lora.safetensors?download=true"

# make the xlabs directory
RUN mkdir -p /ComfyUI/models/xlabs/loras
RUN wget -O /ComfyUI/models/xlabs/loras/Xlabs-AI_flux-RealismLora.safetensors "https://huggingface.co/XLabs-AI/flux-RealismLora/resolve/main/lora.safetensors?download=true"

# Download Controlnet
RUN wget -O /ComfyUI/models/controlnet/diffusion_pytorch_model.safetensors "https://huggingface.co/Shakker-Labs/FLUX.1-dev-ControlNet-Union-Pro/resolve/main/diffusion_pytorch_model.safetensors"

CMD [ "/start.sh" ]
