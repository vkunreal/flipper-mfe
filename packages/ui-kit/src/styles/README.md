## Для переопределения переменных:

```
@use './variables' as bp;
@use '@packages/ui-kit/src/styles/mixins.scss' with (
  $tablet: bp.$tablet
);
```
