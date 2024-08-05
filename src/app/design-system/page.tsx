import {
  ButtonCTA,
  ButtonDelete,
  ButtonPrimary,
  ButtonSecondary,
  ButtonSmall,
} from "../_components";
import {
  CheckboxCustom,
  RadioCustom,
  SelectCustom,
  TextInput,
} from "../_components";
import { H2 } from "../_components/headings";
import { Content, Section } from "../_components/layout";

export default function DesignSystem() {
  return (
    <>
      <Section>
        <H2>Buttons:</H2>
        <Content>
          <ButtonCTA text="Button" />
          <ButtonPrimary text="Button" />
          <ButtonSecondary text="Button" />
          <ButtonDelete />
          <ButtonSmall text="button" />
        </Content>
      </Section>
      <Section>
        <H2>
          Font: <strong>Roboto</strong>
        </H2>
        <Content>
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
        </Content>
      </Section>
      <Section>
        <H2>Inputs:</H2>
        <Content>
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
          <SelectCustom
            options={[
              { value: "1", label: "item 1" },
              { value: "2", label: "item 2" },
            ]}
            name={"Select"}
            placeholder={"Select"}
          />
        </Content>
      </Section>
      {/* <div>
        <div>Layout stuff, card etc</div>
      </div>
      <div>
        <div>etc</div>
      </div> */}
    </>
  );
}
