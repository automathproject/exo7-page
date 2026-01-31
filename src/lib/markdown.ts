import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface CoursMetadata {
	title: string;
	niveau: string;
	ordre: number;
	description?: string;
}

export interface Cours {
	slug: string;
	metadata: CoursMetadata;
	content: string;
	html: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content');

export function getAllCours(niveau?: string): Cours[] {
	const coursDir = path.join(CONTENT_DIR, 'cours');
	
	if (!fs.existsSync(coursDir)) {
		return [];
	}
	
	const files = fs.readdirSync(coursDir).filter(file => file.endsWith('.md'));
	
	const cours = files.map(filename => {
		const slug = filename.replace('.md', '');
		const filePath = path.join(coursDir, filename);
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		const { data, content } = matter(fileContent);
		
		return {
			slug,
			metadata: data as CoursMetadata,
			content,
			html: marked(content)
		};
	});
	
	// Filtrer par niveau si spécifié
	let filteredCours = niveau 
		? cours.filter(c => c.metadata.niveau.toLowerCase() === niveau.toLowerCase())
		: cours;
	
	// Trier par ordre
	filteredCours.sort((a, b) => (a.metadata.ordre || 0) - (b.metadata.ordre || 0));
	
	return filteredCours;
}

export function getCoursBySlug(slug: string): Cours | null {
	const filePath = path.join(CONTENT_DIR, 'cours', `${slug}.md`);
	
	if (!fs.existsSync(filePath)) {
		return null;
	}
	
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);
	
	return {
		slug,
		metadata: data as CoursMetadata,
		content,
		html: marked(content)
	};
}

export function getMarkdownPage(category: string, slug: string): { metadata: any; html: string } | null {
	const filePath = path.join(CONTENT_DIR, category, `${slug}.md`);
	
	if (!fs.existsSync(filePath)) {
		return null;
	}
	
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);
	
	return {
		metadata: data,
		html: marked(content)
	};
}
