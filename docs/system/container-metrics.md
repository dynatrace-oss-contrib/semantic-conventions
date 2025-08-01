<!--- Hugo front matter used to generate the website version of this page:
linkTitle: Container
--->

# Semantic conventions for container metrics

**Status**: [Development][DocumentStatus]

## Container metrics

This document describes instruments and attributes for common container level
metrics in OpenTelemetry. These metrics are collected from technology-specific,
well-defined APIs (e.g. Kubelet's API or container runtimes).

<!-- toc -->

- [Metric: `container.uptime`](#metric-containeruptime)
- [Metric: `container.cpu.time`](#metric-containercputime)
- [Metric: `container.cpu.usage`](#metric-containercpuusage)
- [Metric: `container.memory.usage`](#metric-containermemoryusage)
- [Metric: `container.disk.io`](#metric-containerdiskio)
- [Metric: `container.network.io`](#metric-containernetworkio)
- [Metric: `container.filesystem.available`](#metric-containerfilesystemavailable)
- [Metric: `container.filesystem.capacity`](#metric-containerfilesystemcapacity)
- [Metric: `container.filesystem.usage`](#metric-containerfilesystemusage)

<!-- tocstop -->

### Metric: `container.uptime`

This metric is [recommended][MetricRecommended].

<!-- semconv metric.container.uptime -->
<!-- NOTE: THIS TEXT IS AUTOGENERATED. DO NOT EDIT BY HAND. -->
<!-- see templates/registry/markdown/snippet.md.j2 -->
<!-- prettier-ignore-start -->
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->

| Name     | Instrument Type | Unit (UCUM) | Description    | Stability | Entity Associations |
| -------- | --------------- | ----------- | -------------- | --------- | ------ |
| `container.uptime` | Gauge | `s` | The time the container has been running. [1] | ![Development](https://img.shields.io/badge/-development-blue) |  |

**[1]:** Instrumentations SHOULD use a gauge with type `double` and measure uptime in seconds as a floating point number with the highest precision available.
The actual accuracy would depend on the instrumentation and operating system.

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- END AUTOGENERATED TEXT -->
<!-- endsemconv -->

### Metric: `container.cpu.time`

This metric is [opt-in][MetricOptIn].

<!-- semconv metric.container.cpu.time -->
<!-- NOTE: THIS TEXT IS AUTOGENERATED. DO NOT EDIT BY HAND. -->
<!-- see templates/registry/markdown/snippet.md.j2 -->
<!-- prettier-ignore-start -->
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->

| Name     | Instrument Type | Unit (UCUM) | Description    | Stability | Entity Associations |
| -------- | --------------- | ----------- | -------------- | --------- | ------ |
| `container.cpu.time` | Counter | `s` | Total CPU time consumed. [1] | ![Development](https://img.shields.io/badge/-development-blue) |  |

**[1]:** Total CPU time consumed by the specific container on all available CPU cores

| Attribute  | Type | Description  | Examples  | [Requirement Level](https://opentelemetry.io/docs/specs/semconv/general/attribute-requirement-level/) | Stability |
|---|---|---|---|---|---|
| [`cpu.mode`](/docs/registry/attributes/cpu.md) | string | The CPU mode for this data point. A container's CPU metric SHOULD be characterized _either_ by data points with no `mode` labels, _or only_ data points with `mode` labels. [1] | `user`; `system` | `Conditionally Required` [2] | ![Development](https://img.shields.io/badge/-development-blue) |

**[1] `cpu.mode`:** Following states SHOULD be used: `user`, `system`, `kernel`

**[2] `cpu.mode`:** Required if mode is available, i.e. metrics coming from the Docker Stats API.

---

`cpu.mode` has the following list of well-known values. If one of them applies, then the respective value MUST be used; otherwise, a custom value MAY be used.

| Value  | Description | Stability |
|---|---|---|
| `idle` | idle | ![Development](https://img.shields.io/badge/-development-blue) |
| `interrupt` | interrupt | ![Development](https://img.shields.io/badge/-development-blue) |
| `iowait` | iowait | ![Development](https://img.shields.io/badge/-development-blue) |
| `kernel` | kernel | ![Development](https://img.shields.io/badge/-development-blue) |
| `nice` | nice | ![Development](https://img.shields.io/badge/-development-blue) |
| `steal` | steal | ![Development](https://img.shields.io/badge/-development-blue) |
| `system` | system | ![Development](https://img.shields.io/badge/-development-blue) |
| `user` | user | ![Development](https://img.shields.io/badge/-development-blue) |

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- END AUTOGENERATED TEXT -->
<!-- endsemconv -->

### Metric: `container.cpu.usage`

This metric is [opt-in][MetricOptIn].

<!-- semconv metric.container.cpu.usage -->
<!-- NOTE: THIS TEXT IS AUTOGENERATED. DO NOT EDIT BY HAND. -->
<!-- see templates/registry/markdown/snippet.md.j2 -->
<!-- prettier-ignore-start -->
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->

| Name     | Instrument Type | Unit (UCUM) | Description    | Stability | Entity Associations |
| -------- | --------------- | ----------- | -------------- | --------- | ------ |
| `container.cpu.usage` | Gauge | `{cpu}` | Container's CPU usage, measured in cpus. Range from 0 to the number of allocatable CPUs. [1] | ![Development](https://img.shields.io/badge/-development-blue) |  |

**[1]:** CPU usage of the specific container on all available CPU cores, averaged over the sample window

| Attribute  | Type | Description  | Examples  | [Requirement Level](https://opentelemetry.io/docs/specs/semconv/general/attribute-requirement-level/) | Stability |
|---|---|---|---|---|---|
| [`cpu.mode`](/docs/registry/attributes/cpu.md) | string | The CPU mode for this data point. A container's CPU metric SHOULD be characterized _either_ by data points with no `mode` labels, _or only_ data points with `mode` labels. [1] | `user`; `system` | `Conditionally Required` [2] | ![Development](https://img.shields.io/badge/-development-blue) |

**[1] `cpu.mode`:** Following states SHOULD be used: `user`, `system`, `kernel`

**[2] `cpu.mode`:** Required if mode is available, i.e. metrics coming from the Docker Stats API.

---

`cpu.mode` has the following list of well-known values. If one of them applies, then the respective value MUST be used; otherwise, a custom value MAY be used.

| Value  | Description | Stability |
|---|---|---|
| `idle` | idle | ![Development](https://img.shields.io/badge/-development-blue) |
| `interrupt` | interrupt | ![Development](https://img.shields.io/badge/-development-blue) |
| `iowait` | iowait | ![Development](https://img.shields.io/badge/-development-blue) |
| `kernel` | kernel | ![Development](https://img.shields.io/badge/-development-blue) |
| `nice` | nice | ![Development](https://img.shields.io/badge/-development-blue) |
| `steal` | steal | ![Development](https://img.shields.io/badge/-development-blue) |
| `system` | system | ![Development](https://img.shields.io/badge/-development-blue) |
| `user` | user | ![Development](https://img.shields.io/badge/-development-blue) |

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- END AUTOGENERATED TEXT -->
<!-- endsemconv -->

### Metric: `container.memory.usage`

This metric is [opt-in][MetricOptIn].

<!-- semconv metric.container.memory.usage -->
<!-- NOTE: THIS TEXT IS AUTOGENERATED. DO NOT EDIT BY HAND. -->
<!-- see templates/registry/markdown/snippet.md.j2 -->
<!-- prettier-ignore-start -->
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->

| Name     | Instrument Type | Unit (UCUM) | Description    | Stability | Entity Associations |
| -------- | --------------- | ----------- | -------------- | --------- | ------ |
| `container.memory.usage` | Counter | `By` | Memory usage of the container. [1] | ![Development](https://img.shields.io/badge/-development-blue) |  |

**[1]:** Memory usage of the container.

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- END AUTOGENERATED TEXT -->
<!-- endsemconv -->

### Metric: `container.disk.io`

This metric is [opt-in][MetricOptIn].

<!-- semconv metric.container.disk.io -->
<!-- NOTE: THIS TEXT IS AUTOGENERATED. DO NOT EDIT BY HAND. -->
<!-- see templates/registry/markdown/snippet.md.j2 -->
<!-- prettier-ignore-start -->
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->

| Name     | Instrument Type | Unit (UCUM) | Description    | Stability | Entity Associations |
| -------- | --------------- | ----------- | -------------- | --------- | ------ |
| `container.disk.io` | Counter | `By` | Disk bytes for the container. [1] | ![Development](https://img.shields.io/badge/-development-blue) |  |

**[1]:** The total number of bytes read/written successfully (aggregated from all disks).

| Attribute  | Type | Description  | Examples  | [Requirement Level](https://opentelemetry.io/docs/specs/semconv/general/attribute-requirement-level/) | Stability |
|---|---|---|---|---|---|
| [`disk.io.direction`](/docs/registry/attributes/disk.md) | string | The disk IO operation direction. | `read` | `Recommended` | ![Development](https://img.shields.io/badge/-development-blue) |
| [`system.device`](/docs/registry/attributes/system.md) | string | The device identifier | `(identifier)` | `Recommended` | ![Development](https://img.shields.io/badge/-development-blue) |

---

`disk.io.direction` has the following list of well-known values. If one of them applies, then the respective value MUST be used; otherwise, a custom value MAY be used.

| Value  | Description | Stability |
|---|---|---|
| `read` | read | ![Development](https://img.shields.io/badge/-development-blue) |
| `write` | write | ![Development](https://img.shields.io/badge/-development-blue) |

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- END AUTOGENERATED TEXT -->
<!-- endsemconv -->

### Metric: `container.network.io`

This metric is [opt-in][MetricOptIn].

<!-- semconv metric.container.network.io -->
<!-- NOTE: THIS TEXT IS AUTOGENERATED. DO NOT EDIT BY HAND. -->
<!-- see templates/registry/markdown/snippet.md.j2 -->
<!-- prettier-ignore-start -->
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->

| Name     | Instrument Type | Unit (UCUM) | Description    | Stability | Entity Associations |
| -------- | --------------- | ----------- | -------------- | --------- | ------ |
| `container.network.io` | Counter | `By` | Network bytes for the container. [1] | ![Development](https://img.shields.io/badge/-development-blue) |  |

**[1]:** The number of bytes sent/received on all network interfaces by the container.

| Attribute  | Type | Description  | Examples  | [Requirement Level](https://opentelemetry.io/docs/specs/semconv/general/attribute-requirement-level/) | Stability |
|---|---|---|---|---|---|
| [`network.interface.name`](/docs/registry/attributes/network.md) | string | The network interface name. | `lo`; `eth0` | `Recommended` | ![Development](https://img.shields.io/badge/-development-blue) |
| [`network.io.direction`](/docs/registry/attributes/network.md) | string | The network IO operation direction. | `transmit` | `Recommended` | ![Development](https://img.shields.io/badge/-development-blue) |

---

`network.io.direction` has the following list of well-known values. If one of them applies, then the respective value MUST be used; otherwise, a custom value MAY be used.

| Value  | Description | Stability |
|---|---|---|
| `receive` | receive | ![Development](https://img.shields.io/badge/-development-blue) |
| `transmit` | transmit | ![Development](https://img.shields.io/badge/-development-blue) |

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- END AUTOGENERATED TEXT -->
<!-- endsemconv -->

### Metric: `container.filesystem.available`

This metric is [recommended][MetricRecommended].

<!-- semconv metric.container.filesystem.available -->
<!-- NOTE: THIS TEXT IS AUTOGENERATED. DO NOT EDIT BY HAND. -->
<!-- see templates/registry/markdown/snippet.md.j2 -->
<!-- prettier-ignore-start -->
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->

| Name     | Instrument Type | Unit (UCUM) | Description    | Stability | Entity Associations |
| -------- | --------------- | ----------- | -------------- | --------- | ------ |
| `container.filesystem.available` | UpDownCounter | `By` | Container filesystem available bytes. [1] | ![Development](https://img.shields.io/badge/-development-blue) | [`container`](/docs/registry/entities/container.md#container) |

**[1]:** In K8s, this metric is derived from the
[FsStats.AvailableBytes](https://pkg.go.dev/k8s.io/kubelet@v0.33.0/pkg/apis/stats/v1alpha1#FsStats) field
of the [ContainerStats.Rootfs](https://pkg.go.dev/k8s.io/kubelet@v0.33.0/pkg/apis/stats/v1alpha1#ContainerStats)
of the Kubelet's stats API.

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- END AUTOGENERATED TEXT -->
<!-- endsemconv -->

### Metric: `container.filesystem.capacity`

This metric is [recommended][MetricRecommended].

<!-- semconv metric.container.filesystem.capacity -->
<!-- NOTE: THIS TEXT IS AUTOGENERATED. DO NOT EDIT BY HAND. -->
<!-- see templates/registry/markdown/snippet.md.j2 -->
<!-- prettier-ignore-start -->
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->

| Name     | Instrument Type | Unit (UCUM) | Description    | Stability | Entity Associations |
| -------- | --------------- | ----------- | -------------- | --------- | ------ |
| `container.filesystem.capacity` | UpDownCounter | `By` | Container filesystem capacity. [1] | ![Development](https://img.shields.io/badge/-development-blue) | [`container`](/docs/registry/entities/container.md#container) |

**[1]:** In K8s, this metric is derived from the
[FsStats.CapacityBytes](https://pkg.go.dev/k8s.io/kubelet@v0.33.0/pkg/apis/stats/v1alpha1#FsStats) field
of the [ContainerStats.Rootfs](https://pkg.go.dev/k8s.io/kubelet@v0.33.0/pkg/apis/stats/v1alpha1#ContainerStats)
of the Kubelet's stats API.

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- END AUTOGENERATED TEXT -->
<!-- endsemconv -->

### Metric: `container.filesystem.usage`

This metric is [recommended][MetricRecommended].

<!-- semconv metric.container.filesystem.usage -->
<!-- NOTE: THIS TEXT IS AUTOGENERATED. DO NOT EDIT BY HAND. -->
<!-- see templates/registry/markdown/snippet.md.j2 -->
<!-- prettier-ignore-start -->
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->

| Name     | Instrument Type | Unit (UCUM) | Description    | Stability | Entity Associations |
| -------- | --------------- | ----------- | -------------- | --------- | ------ |
| `container.filesystem.usage` | UpDownCounter | `By` | Container filesystem usage. [1] | ![Development](https://img.shields.io/badge/-development-blue) | [`container`](/docs/registry/entities/container.md#container) |

**[1]:** This may not equal capacity - available.

In K8s, this metric is derived from the
[FsStats.UsedBytes](https://pkg.go.dev/k8s.io/kubelet@v0.33.0/pkg/apis/stats/v1alpha1#FsStats) field
of the [ContainerStats.Rootfs](https://pkg.go.dev/k8s.io/kubelet@v0.33.0/pkg/apis/stats/v1alpha1#ContainerStats)
of the Kubelet's stats API.

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- END AUTOGENERATED TEXT -->
<!-- endsemconv -->

[DocumentStatus]: https://opentelemetry.io/docs/specs/otel/document-status
[MetricOptIn]: /docs/general/metric-requirement-level.md#opt-in
[MetricRecommended]: /docs/general/metric-requirement-level.md#recommended
