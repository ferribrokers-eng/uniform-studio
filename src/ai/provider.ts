export type AIGenerationInput={prompt:string;referenceImage?:string};
export type AIGenerationResult={text?:string;imageDataUrl?:string};

/**
 * Provider boundary for AI generation.
 * The production app should call a server-side endpoint so API keys never reach the browser.
 */
export async function generateUniformConcept(input:AIGenerationInput):Promise<AIGenerationResult>{
  const response=await fetch('/api/ai/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(input)});
  if(!response.ok) throw new Error('Não foi possível gerar a criação com IA.');
  return response.json();
}
