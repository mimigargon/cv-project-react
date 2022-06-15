export const EDIT_HERO = 'EDIT_HERO';

export const editHero = (editHero, id) => {
    dispatchEvent({
        type: EDIT_HERO,
        payload: {editHero, id}
    });
}