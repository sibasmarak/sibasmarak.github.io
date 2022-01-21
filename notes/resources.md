# Research Papers Read

1.  [Good for Misconceived Reasons: An Empirical Revisiting on the Need for Visual Context in Multimodal Machine Translation](https://arxiv.org/abs/2105.14462).   
    **Authors**: Zhiyong Wu, Lingpeng Kong, Wei Bi, Xiang Li, Ben Kao. 2021.    
    **Tags**: `interpretability`, `machine translation`, `visual grounding`  
    
    **Summary**: Propose interpretable models for understanding the importance of Visual information in MMT (Multimodal Machine Translation). They use a gated mechanism to control the amount of visual information to be blended into the textual representation. This also helps to interpret the visual information used.  

2.  [Grounded Textual Entailment](https://arxiv.org/abs/1806.05645).   
    **Authors**: Hoa Trong Vu, Claudio Greco, Aliia Erofeeva, Somayeh Jafaritazehjan, Guido Linders, Marc Tanti, Alberto Testoni, Raffaella Bernardi, Albert Gatt. 2018.    
    **Tags**: `textual entailment`, `visual grounding`  

    **Summary**: Investigate the effect of visual grounding in textual entailment. For each input (premise - hypothesis), fuse the corresponding visual information in the form of element-wise multiplication of visual embedding and premise/hypothesis embedding. Observe the overall and class-wise performance (accuracy) on dev, test, test-hard sets for both with and without visual grounding.  

3.  [Strumming to the Beat: Audio-Conditioned Contrastive Video Textures](https://arxiv.org/abs/2104.02687).   
    **Authors**: Medhini Narasimhan, Shiry Ginosar, Andrew Owens, Alexei A. Efros, Trevor Darrell. 2021.  
    **Tags**: `contrastive`, `multi-modal learning`  
    
    **Summary**: A non-parametric learning-based approach for video texture synthesis. Fitting an example-specific bi-gram model (i.e. a Markov chain) and using it to re-sample input frames. Contrastive learning to learn video and audio feature representation. Contrastive model used for inferring the probabilities of transition.  

4.  [The Curious Layperson: Fine-Grained Image Recognition without Expert Labels](https://arxiv.org/abs/2111.03651).   
    **Authors**: Subhabrata Choudhury, Iro Laina, Christian Rupprecht, Andrea Vedaldi. 2021.  
    **Tags**: `contrastive`, `computer-vision`, `natural language processing`  
    
    **Summary**: Image recognition without expert supervision. Generate a simple non-expert description of image. Next, use this description to retrieve/recognize the image from a set of documents with the aid of FGSM (Fine Grained Sentence Matching). Leverage image descriptions as an intermediary for learning to map images to an expert corpus (and without any expert supervision involved).    

5.  [Unsupervised Part Discovery from Contrastive Reconstruction](https://arxiv.org/abs/2111.06349).   
    **Authors**: Subhabrata Choudhury, Iro Laina, Christian Rupprecht, Andrea Vedaldi. 2021.  
    **Tags**: `contrastive`, `computer-vision`  
    
    **Summary**: Part segmentation. Four different loss as a proxy to supervised training: Feature Loss (parts are consistent amongst themselves), Contrastive loss (loss between same parts in different images), Equivariance loss (part should not be different wrt to transformations, Visual Consistency loss (simplified/cartoon version of image to encourage visual consistency)  
