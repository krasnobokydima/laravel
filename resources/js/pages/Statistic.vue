<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Statistic',
        href: '/statistic',
    },
];

import { usePage } from '@inertiajs/vue3';

const { title } = usePage().props;
console.log(usePage(), title);

</script>

<template>
    <Head title="Statistic" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <div class="grid auto-rows-min gap-4 md:grid-cols-3">
                <div class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    Hello
                </div>
                <div class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    Hi
                </div>
                <div class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    Statistic
                </div>
            </div>
            <div class="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border md:min-h-min">
<!--                To get some url route('password.reset') ->  {{route('password.reset')}}-->
                To get some url route('password.store') ->  {{route('password.store')}}
                <br>
<!--                To get some config config('password.store') ->  {{ config('app.name', 'Laravel') }}-->
                Title from use page from interia -> {{title}}
                Check somethisng in blade -> dd()
            </div>
        </div>
    </AppLayout>
</template>
