import { IResource } from '../iresource';

export const aiMl = {
  category: 'AI and Machine Learning',
  assets: [
    {
      abbrev: 'srch',
      name: 'AI Search'
    },
    {
      abbrev: 'ais',
      name: 'Azure AI services (multi-service account)',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'aif',
      name: 'Azure AI Foundry account',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'hub',
      name: 'Azure AI Foundry hub'
    },
    {
      abbrev: 'proj',
      name: 'Azure AI Foundry project',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'cog',
      name: 'Azure Cognitive Services'
    },
    {
      abbrev: 'mlw',
      name: 'Azure Machine Learning workspace'
    },
    {
      abbrev: 'avi',
      name: 'Azure AI Video Indexer'
    },
    {
      abbrev: 'oai',
      name: 'Azure OpenAI Service',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'bot',
      name: 'Bot service'
    },
    {
      abbrev: 'cv',
      name: 'Computer vision',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'cm',
      name: 'Content moderator',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'cs',
      name: 'Content safety',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'cstv',
      name: 'Custom vision (prediction)',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'cstvt',
      name: 'Custom vision (training)',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'di',
      name: 'Document intelligence',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'face',
      name: 'Face API',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'hi',
      name: 'Health Insights',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'ir',
      name: 'Immersive reader',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'lang',
      name: 'Language service',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'spch',
      name: 'Speech service',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    {
      abbrev: 'trsl',
      name: 'Translator',
      minLength: 2,
      maxLength: 64,
      regex: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
  ] as IResource[]
};
