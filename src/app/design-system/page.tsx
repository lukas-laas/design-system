import {
  ButtonCTA,
  ButtonDelete,
  ButtonPrimary,
  ButtonSecondary,
  ButtonSmall,
} from "../_components";

export default function DesignSystem() {
  return (
    <>
      <div>
        <ButtonCTA text="Button" />
        <ButtonPrimary text="Button" />
        <ButtonSecondary text="Button" />
        <ButtonDelete />
        <ButtonSmall text="button" />
      </div>
      <div>
        <p>Fonts</p>
      </div>
      <div>
        <input type="text" />
        <input type="checkbox" />
        <input type="radio" />
        <input type="range" />
      </div>
      <div>
        <div>Layout stuff, card etc</div>
      </div>
      <div>
        <div>etc</div>
      </div>
    </>
  );
}
