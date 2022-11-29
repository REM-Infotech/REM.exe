import { Bot } from '../types/Bots';

export const bots: Bot[] = [
    {
      id: 1,
      title: 'Anexar Nota Técnica',
      description: 'Robô para anexar notas técnicas em lote no e-Law.',
      type: 'not',
      plataform: 'elaw',
      chips: [
        {
          label: 'e-Law',
          link: 'elaw'
        }
      ]
    },
    {
      id: 2,
      title: 'Encerramento de processos',
      description: 'Robô para encerrar processos em lote no e-Law.',
      type: 'enc',
      plataform: 'elaw',
      chips: [
        {
          label: 'e-Law',
          link: 'elaw'
        }
      ]
    },
    {
      id: 3,
      title: 'Movimentação',
      description: 'Robô para obter as movimentações de processos no e-SAJ',
      type: 'mov',
      plataform: 'esaj',
      chips: [
        {
          label: 'e-SAJ',
          link: 'esaj'
        },
        {
          label: 'Movimentação',
          link: 'move'
        },
      ]
    },
    {
      id: 4,
      title: 'Movimentação',
      description: 'Robô para obter as movimentações de processos no Projudi',
      type: 'mov',
      plataform: 'projudi',
      chips: [
        {
          label: 'Projudi',
          link: 'projudi'
        },
        {
          label: 'Movimentação',
          link: 'move'
        },
      ]
    },
    {
      id: 5,
      title: 'Peticionar',
      description: 'Robô para realizar peticionamento em massas de processos no Projudi.',
      type: 'pet',
      plataform: 'projudi',
      chips: [
        {
          label: 'Projudi',
          link: 'projudi'
        },
        {
          label: 'Peticionamento',
          link: 'pet'
        },
      ]
    },
    {
      id: 6,
      title: 'Buscar informações processuais',
      description: 'Robô para obter informações de processos em lote.',
      type: 'inf',
      plataform: 'projudi',
      chips: [
        {
          label: 'Projudi',
          link: 'projudi'
        },
        {
          label: 'Informações',
          link: 'inf'
        },
      ]
    },
    {
      id: 7,
      title: 'Buscar processos de uma parte',
      description: 'Robô para obter todos os processos de uma determinada parte.',
      type: 'par',
      plataform: 'projudi',
      chips: [
        {
          label: 'Projudi',
          link: 'projudi'
        },
        {
          label: 'Processos de uma parte',
          link: 'par'
        },
      ]
    },
  ]