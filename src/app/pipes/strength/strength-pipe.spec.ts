import { StrengthPipe } from "./strength-pipe";

describe('strength pipe:', () => {
    it('transform function:should return weak whe passing 3', () => {
      let pipe= new StrengthPipe()

    expect(pipe.transform(3)).toContain("weak");
  });
    it('transform function:should return strong whe passing 12', () => {
      let pipe= new StrengthPipe()

    expect(pipe.transform(12)).toContain("strong");
  });
});
