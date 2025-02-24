import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { type DocumentLocation,	defineDocuments,	defineLocations,	presentationTool } from 'sanity/presentation';
import { schemaTypes } from './schemaTypes';

const homeLocation = {
	title: 'Home',
	href: '/',
} satisfies DocumentLocation;

export const projectId = 'm95ktlhh';
export const dataset =  'production';

function resolveHref(documentType?: string, id?: string): string | undefined {
	switch (documentType) {
		case 'post':
			return id ? `/insights/${id}` : undefined;
		case 'page':
			return id ? `/${id}` : undefined;
		default:
			console.warn('Invalid document type:', documentType);
			return undefined;
	}
}

export default defineConfig({
	name: 'hiboop-site',
	title: 'HiBoop Site',
	projectId,
	dataset,
	plugins: [structureTool(), visionTool(), presentationTool({
		previewUrl: {
			preview: '/insights',
			origin: 'https://hiboop.com',
			previewMode: {
				enable: '/preview/enable',
				disable: '/preview/disable',
			},
		},
		resolve: {
			mainDocuments: defineDocuments([
				{
					route: '/insights',
					filter: '_type == "post"',
				},
				{
					route: '/insights/:slug',
					filter: '_type == "post" && slug.current == $slug',
				},
			]),
			locations: {
				settings: defineLocations({
					locations: [homeLocation],
					message: 'This document is used on all pages',
					tone: 'positive',
				}),
				page: defineLocations({
					select: {
						name: 'name',
						slug: 'slug.current',
					},
					resolve: doc => ({
						locations: [
							{
								title: doc?.name || 'Untitled',
								href: resolveHref('page', doc?.slug)!,
							},
						],
					}),
				}),
				post: defineLocations({
					select: {
						title: 'title',
						slug: 'slug.current',
					},
					resolve: doc => ({
						locations: [
							{
								title: doc?.title || 'Untitled',
								href: resolveHref('post', doc?.slug)!,
							},
							{
								title: 'Home',
								href: '/',
							} satisfies DocumentLocation,
						].filter(Boolean) as DocumentLocation[],
					}),
				}),
			},
		},
	})],

	schema: {
		types: schemaTypes,
	},
});
