export type MediaType = 'photo' | 'sticker' | 'video'

/**
 * Which note template do we want to use? (Sticky Notes, Sealed Letter, Photo)
 *
 * This will affect the designs/visuals of how the note is displayed.
 **/
export type NoteTemplate = 'sticky' | 'letter' | 'photo'

export interface Media {
	/** URL of the media. */
	url: string

	/** What type of media is this? */
	type: MediaType
}

export interface Note {
	id: string

	/** User id of the sender */
	from: string

	/** User id of the receiver */
	to: string

	/** Message in markdown format */
	message: string

	/** Images to add to this note. */
	media?: Media[]

	/** Note template. Defaults to sticky notes. */
	template?: NoteTemplate

	/** Note background (color or image). Defaults to yellow. */
	background?: string
}
