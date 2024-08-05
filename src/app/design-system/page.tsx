import {
  ButtonCTA,
  ButtonDelete,
  ButtonPrimary,
  ButtonSecondary,
  ButtonSmall,
} from "../_components";
import { CheckboxCustom, RadioCustom, TextInput } from "../_components/inputs";

export default function DesignSystem() {
  return (
    <>
      <div className="flex gap-1 flex-wrap p-1">
        <h2>Buttons:</h2>
        <div className="flex gap-1 flex-wrap p-1">
          <ButtonCTA text="Button" />
          <ButtonPrimary text="Button" />
          <ButtonSecondary text="Button" />
          <ButtonDelete />
          <ButtonSmall text="button" />
        </div>
      </div>
      <div className="flex gap-1 flex-wrap p-1">
        <h2>
          Font: <strong>Roboto</strong>
        </h2>
        <div className="flex gap-1 flex-wrap p-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            blanditiis voluptatem esse, ullam ipsa quis cumque aliquam tempore
            recusandae. Nihil ipsam aperiam deserunt mollitia quis doloribus,
            unde omnis? Ratione, cupiditate.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            blanditiis voluptatem esse, ullam ipsa quis cumque aliquam tempore
            recusandae.
          </p>
        </div>
      </div>
      <div className="flex gap-1 flex-wrap p-1 flex-col">
        <h2>Inputs:</h2>
        <div className="p-1 flex flex-col">
          <TextInput
            placeholder="input"
            label={"text input"}
            name={"text-input"}
          />
          <CheckboxCustom
            placeholder={"checkbox"}
            label={"checkbox"}
            name={"checkbox"}
          />
          <RadioCustom
            items={[
              { value: "1", label: "item 1" },
              { value: "2", label: "item 2" },
            ]}
            name={"Radio group"}
          />
          <input type="range" />
        </div>
      </div>
      {/* <div>
        <div>Layout stuff, card etc</div>
      </div>
      <div>
        <div>etc</div>
      </div> */}
    </>
  );
}
