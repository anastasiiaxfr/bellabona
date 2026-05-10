import { Button } from "@/components/ui/button";

import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";

function LangSwitcher() {
  return (
    <ButtonGroup>
      <Button variant="outline">EN</Button>
      <Button variant="secondary">DE</Button>
    </ButtonGroup>
  );
}

export default LangSwitcher;
