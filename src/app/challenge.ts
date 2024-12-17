export class Challenge {
  constructor(
    public id: number,
    public name: string,
    public description: { task: string; bonus: string }[],
    public difficulty: 'Easy' | 'Medium' | 'Hard',
    public points: number,
    public days: number,
    public participants: number
  ) {}
}
