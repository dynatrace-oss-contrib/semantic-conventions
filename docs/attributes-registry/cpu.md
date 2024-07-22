<!--- Hugo front matter used to generate the website version of this page:
--->

<!-- NOTE: THIS FILE IS AUTOGENERATED. DO NOT EDIT BY HAND. -->
<!-- see templates/registry/markdown/attribute_namespace.md.j2 -->

# CPU

## CPU Attributes

Attributes specific to a cpu instance.

| Attribute  | Type   | Description         | Examples         | Stability                                                        |
| ---------- | ------ | ------------------- | ---------------- | ---------------------------------------------------------------- |
| `cpu.mode` | string | The mode of the CPU | `user`; `system` | ![Experimental](https://img.shields.io/badge/-experimental-blue) |

`cpu.mode` has the following list of well-known values. If one of them applies, then the respective value MUST be used; otherwise, a custom value MAY be used.

| Value       | Description | Stability                                                        |
| ----------- | ----------- | ---------------------------------------------------------------- |
| `idle`      | idle        | ![Experimental](https://img.shields.io/badge/-experimental-blue) |
| `interrupt` | interrupt   | ![Experimental](https://img.shields.io/badge/-experimental-blue) |
| `iowait`    | iowait      | ![Experimental](https://img.shields.io/badge/-experimental-blue) |
| `kernel`    | kernel      | ![Experimental](https://img.shields.io/badge/-experimental-blue) |
| `nice`      | nice        | ![Experimental](https://img.shields.io/badge/-experimental-blue) |
| `steal`     | steal       | ![Experimental](https://img.shields.io/badge/-experimental-blue) |
| `system`    | system      | ![Experimental](https://img.shields.io/badge/-experimental-blue) |
| `user`      | user        | ![Experimental](https://img.shields.io/badge/-experimental-blue) |