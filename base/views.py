from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
import openai


@api_view(['POST'])
def summit(request):
    
    data = request.data
    prompt = data.get('q')
    

    openai.api_key = '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'
    
  
    summary = openai.Completion.create(
    model="text-davinci-003",
    prompt="hey",
    temperature=1,
    max_tokens=100,
  )["choices"][0]["text"].strip('\n')
    
    agenda = openai.Completion.create(
    model="text-davinci-003",
    prompt=prompt + "on the basis of above Questions and answers can you give the insight of my mental health",
    temperature=1,
    max_tokens=20,
  )["choices"][0]["text"].strip('\n')
    
#     tone = openai.Completion.create(
#     model="text-davinci-003",
#     prompt="What is the spoken tone of the speaker: "+prompt,
#     temperature=1,
#     max_tokens=50,
#   )["choices"][0]["text"].strip('\n')
    
#     noa = openai.Completion.create(
#     model="text-davinci-003",
#     prompt="takeaway points from this session: "+prompt,
#     temperature=1,
#     max_tokens=50,
#   )["choices"][0]["text"].strip('\n')
    
    clear = openai.Completion.create(
    model="text-davinci-003",
    prompt="clear the previous prompts",
    temperature=1,
    max_tokens=50,
  )

    return Response({"summary":summary,"title":agenda, "tone": tone, "noa": noa})

