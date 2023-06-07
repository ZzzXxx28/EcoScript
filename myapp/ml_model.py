import tensorflow as tf
import numpy as np
from PIL import Image
import torch
from transformers import AutoFeatureExtractor, ResNetForImageClassification

# Load your trained model
#model = tf.keras.models.load_model('drive/My Drive/Colab Notebooks/OurModel.ipynb')

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/resnet-101")
model = ResNetForImageClassification.from_pretrained("microsoft/resnet-101")

def preprocess_image(image):
    # Preprocess the image (e.g., resize, normalize) according to your model's requirements
    # Return the preprocessed image
    return image

def make_predictions(image):
    # Preprocess the image
    preprocessed_image = preprocess_image(image)

    inputs = feature_extractor(image, return_tensors="pt")

    with torch.no_grad():
      logits = model(**inputs).logits

    # model predicts one of the 1000 ImageNet classes
    predicted_label = logits.argmax(-1).item()
    print(model.config.id2label[predicted_label])

    return model.config.id2label[predicted_label]
