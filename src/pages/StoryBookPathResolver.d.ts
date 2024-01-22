import { PathResolver } from '../components/contexts/PathResolverProvider';
export declare class StoryBookPathResolver implements PathResolver {
    explorer(): string;
    blocks(): string;
    block(height: number): string;
    transactions(): string;
    transaction(hash: string): string;
    rollUps(): string;
    rollUp(namespace: number): string;
}
