import {defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons' // <--- Mudamos para PlayIcon

export const musicType = defineType({
  name: 'music',
  title: 'Música & Álbuns',
  type: 'document',
  icon: PlayIcon, // <--- Atualize aqui também
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Álbum/Single',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'artist',
      title: 'Artista / Banda',
      type: 'string',
      initialValue: 'Base CDP Music',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Data de Lançamento',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'spotifyUrl',
      title: 'Link do Spotify',
      type: 'url',
    }),
    defineField({
      name: 'coverImage',
      title: 'Capa do Álbum',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'releaseDate',
      media: 'coverImage',
    },
  },
})
