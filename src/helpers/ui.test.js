import { modFox, modScene, togglePoopBag, writeModal } from './ui';

document.body.innerHTML = `
  <div>
    <div class="game">
      <div class='fox'></div>
      <div class='poop-bag'></div>
    </div>
    <div class='modal'></div>
  </div>
  `;

describe('modFox function', () => {
  it('should set the correct class based on the state', () => {
    // Possible option for creating needed markdown
    /* const element = document.createElement('div');
    element.className = 'fox';
    document.querySelector = jest.fn().mockReturnValue(element); */

    modFox('happy');
    expect(document.querySelector('.fox').className).toBe('fox fox-happy');
    modFox('sad');
    expect(document.querySelector('.fox').className).toBe('fox fox-sad');
  });
});

describe('modScene function', () => {
  it('should set the correct class based on the arg', () => {
    modScene('idle');
    expect(document.querySelector('.game').className).toBe('game idle');
    modScene('rain');
    expect(document.querySelector('.game').className).toBe('game rain');
  });
});

describe('togglePoopBag function', () => {
  it('should remove hidden when show bag', () => {
    togglePoopBag(true);
    expect(
      document.querySelector('.poop-bag').classList.contains('hidden'),
    ).toBe(false);
  });
  it('should add hidden when hide bag', () => {
    togglePoopBag(false);
    expect(
      document.querySelector('.poop-bag').classList.contains('hidden'),
    ).toBe(true);
  });
});

describe('writeModal function', () => {
  it('should create empty modal when no args', () => {
    writeModal();
    expect(document.querySelector('.modal-inner').innerHTML).toBe('');
  });

  it('should create modal with the content', () => {
    writeModal('content');
    expect(document.querySelector('.modal-inner').innerHTML).toBe('content');
  });
});
