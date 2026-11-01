---
layout: page
title: Research
permalink: /research/
description: Neural acoustic modelling and sound field control for spatial audio.
nav: true
nav_order: 1
---

My work explores how machine learning and acoustic knowledge can be combined to model sound fields and control their reproduction through loudspeaker arrays. I am particularly interested in the relationship between **acoustic reconstruction accuracy** and **downstream reproduction performance**.

{% for area in site.data.research %}
<section class="research-detail" aria-labelledby="{{ area.id }}">
  <h2 id="{{ area.id }}">{{ area.title }}</h2>
  <p>{{ area.description }}</p>
  <div class="publications">
    {% assign paper_query = area.papers | replace: ',', '|' %}
    {% bibliography -f {{ site.scholar.bibliography }} --group_by none --query @*[key^={{ paper_query }}]* %}
  </div>
</section>
{% endfor %}

## Audio software and earlier projects

Alongside my research, I develop audio software. At [PASACO Studio](https://pasaco.world/) (2024), I worked on a real-time iOS audio engine using AVAudioEngine and C++ buffers, together with a modular SwiftUI interface. My audio software projects received the Most Fun Award at Muse Hub Hackathon 2024 and the Best Creative Hack Award at Timbre Tools Hackathon 2024.

I also co-developed [Daily Life Vocoder](https://github.com/li630925405/daily-life-vocoder), a mobile vocoder sequencer for exploring everyday sounds and musical timbres.

[Browse earlier audio projects →]({{ '/projects/' | relative_url }})
