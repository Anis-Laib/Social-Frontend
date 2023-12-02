<script>
    import { Card, Button } from 'flowbite-svelte';
    import { Modal, Label, Input, Checkbox } from 'flowbite-svelte';
    let formModal = false;

    export let data

    let groups = data.groups.groups

    const user = data.user

    let userGroups = user.groups

    // @ts-ignore
    userGroups = groups.filter(group => userGroups.some(userGroup => userGroup.groupId === group.id)
    );
    
</script>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
  <form class="flex flex-col space-y-6" method="post" action="?/create">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create</h3>
    <Label class="space-y-2">
      <span>Name</span>
      <Input type="text" name="name" placeholder="Name..." required />
    </Label>
    <Label class="space-y-2">
      <span>Private?</span>
      <Checkbox name="isPrivate" value="yes">Yes</Checkbox>
    </Label>
    
    <Button type="submit">Submit</Button>
  </form>
</Modal>

<div class="flex justify-between py-6">
    <h1 class="text-4xl">Groups</h1>
    <Button on:click={() => (formModal = true)}>Create</Button>
</div>

{#if user.groups.length !== 0}
    <div class="flex justify-between py-6">
        <h1 class="text-2xl">Your Groups</h1>
    </div>

    <div class="grid grid-cols-3 gap-6">
    {#each userGroups as group}
    <a href="groups/{group.id}">
            <Card img="https://placehold.jp/30/808080/ffffff/400x200.png?text={group.name}" class="mb-4">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{group.name}</h5>
            </Card>
        </a>
    
    {/each}
</div>
{/if}

<div class="flex justify-between py-6">
    <h1 class="text-2xl">All Groups</h1>
</div>

<div class="grid grid-cols-3 gap-6">
    {#each groups as group}
            <Card img="https://placehold.jp/30/808080/ffffff/400x200.png?text={group.name}" class="mb-4">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{group.name}</h5>
                    <form action="?/join" method="post">
                        <input type="hidden" name="id" value="{group.id}">
                        {#if group.isPrivate}
                                <Button type="submit">Request</Button>
                        {:else}
                                <Button type="submit">Join</Button>
                        {/if}
                    </form>
            </Card>
        {:else}
            Nothing Here
        {/each}
</div>